import padLeft from 'pad-left'
import { stringify } from 'querystring'
import { parse, splitCookiesString } from 'set-cookie-parser'
import codeToCurrencyLookup from '../../common/codeToCurrencyLookup'
import { isValidDate } from '../../common/dateUtils'
import { fetchJson } from '../../common/network'

const rejectedTransactionTypes = [
  'Отказ',
  'Otkaz'
]

const cashTransferTransactionTypes = [
  'Пополнение',
  'Popolnenie',
  'Банкомат',
  'Bankomat',
  'Наличные',
  'Nalichnye',
  'Пополнение счета наличными (по паспорту)',
  'Пополнение счета наличными'
]

export const getTransactionFactor = (smsTx) => {
  const transactionTypeFactors = {
    Возврат: 1,
    Vozvrat: 1,
    'Возврат средств': 1,
    'Vozvrat sredstv': 1,
    Пополнение: 1,
    Popolnenie: 1,
    'Service payment to card': 1,
    Зачисление: 1,
    Zachislenie: 1,
    Списание: -1,
    Spisanie: -1,
    'Комиссия банка': -1,
    'Товары и услуги': -1,
    'Tovary i uslugi': -1,
    Банкомат: -1,
    Bankomat: -1,
    Наличные: -1,
    Nalichnye: -1,
    'Зачисление с конверсией': 1,
    'Покупка валюты за б/н рубли': 1,
    'Пополнение счета наличными (по паспорту)': 1,
    'Плата за замену карточки': -1,
    'Годовая плата за дополнительную карточку': -1,
    'Зачисление Money-back': 1
  }
  let factor = transactionTypeFactors[smsTx.transactionType]
  if (!factor) {
    if (/Комиссия за .*обслуживание/i.test(smsTx.transactionType)) {
      factor = -1
    } else if (smsTx.colour === 2) {
      factor = -1
    } else if (smsTx.colour === 1) {
      factor = 1
    }
  }
  console.assert(factor !== undefined, 'unknown factor:', smsTx)
  return factor
}

export const isElectronicTransferTransaction = (smsTx) => smsTx.transactionDetails === 'PERSON TO PERSON I-B BSB'

export const isCashTransferTransaction = (smsTx) => cashTransferTransactionTypes.indexOf(smsTx.transactionType) !== -1

export const isRegularSpendTransaction = (smsTx) => smsTx.transactionType === 'Товары и услуги' || smsTx.transactionType === 'Tovary i uslugi'

export const isRejectedTransaction = (smsTx) => rejectedTransactionTypes.indexOf(smsTx.transactionType.trim()) !== -1

const bankTimezone = 3 * 3600 * 1000

function patchTimezone (userDate) {
  return new Date(userDate.valueOf() + bankTimezone)
}

export const assertResponseSuccess = function (response) {
  console.assert(response.status === 200, 'non-successful response', response)
}

const lang = 'ru'

const makeApiUrl = (path, queryParams) => `https://24.bsb.by/mobile/api${path}?${stringify(queryParams)}`

const BSB_AUTH_URL = makeApiUrl('/authorization', { lang })

const requestLogin = ({
  username,
  password,
  deviceId
}) => fetchJson(BSB_AUTH_URL, {
  method: 'POST',
  body: {
    username,
    password,
    deviceId,
    applicationVersion: 'Web 6.0.12',
    osType: 3,
    currencyIso: 'BYN'
  },
  sanitizeRequestLog: {
    body: {
      username: true,
      password: true,
      deviceId: true
    }
  },
  sanitizeResponseLog: {
    headers: { 'set-cookie': true },
    body: {
      birthDate: true,
      eripId: true,
      fio: true,
      mobilePhone: true,
      sessionId: true,
      username: true
    }
  }
})

export async function authorize (username, password, deviceId) {
  const loginResponse = await requestLogin({
    username,
    password,
    deviceId
  })
  if (loginResponse.status === 403 && loginResponse.body.error === 'Неверные учетные данные') {
    throw new InvalidPreferencesError(loginResponse.body.error)
  }
  assertResponseSuccess(loginResponse)
  const cookie = parse(splitCookiesString(loginResponse.headers['set-cookie'])).find((x) => x.name === 'JSESSIONID')
  ZenMoney.setData('sessionId', cookie.value)
  ZenMoney.saveData()
  return loginResponse.body
}

export async function confirm (deviceId, confirmationCode) {
  const response = await fetchJson(makeApiUrl(`/devices/${deviceId}`, { lang }), {
    method: 'POST',
    body: confirmationCode,
    sanitizeRequestLog: {
      headers: { 'set-cookie': true },
      body: true
    }
  })
  console.assert(response.body.deviceStatus === 'CONFIRMED', 'confirmation failed:', response)
}

export async function fetchCards () {
  return fetchJson(makeApiUrl('/cards', {
    nocache: true,
    lang
  }), {
    method: 'GET',
    sanitizeResponseLog: {
      headers: { 'set-cookie': true },
      body: {
        contract: true,
        maskedCardNumber: true,
        ownerName: true,
        ownerNameLat: true,
        rbsContract: true
      }
    }
  })
}

export function formatBsbArchiveApiDate (userDate) {
  if (!isValidDate(userDate)) {
    throw new Error('valid date should be provided')
  }
  const date = patchTimezone(userDate)
  return [
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate()
  ].map((number) => padLeft(number, 2, '0')).join('')
}

export function unpackArchiveTransactions (response) {
  assertResponseSuccess(response)
  const {
    archives,
    hasNext
  } = response.body
  console.assert(!hasNext, 'fetchPaymentsArchive paging is not implemented')
  return archives
}

export async function fetchArchiveTransactionsResponse ({
  fromDate,
  toDate
}) {
  return await fetchJson(makeApiUrl('/archive', { lang }), {
    method: 'POST',
    body: {
      page: {
        pageNumber: 0,
        pageSize: 2147483647
      },
      fromDate: formatBsbArchiveApiDate(fromDate),
      toDate: formatBsbArchiveApiDate(toDate || new Date())
    },
    sanitizeResponseLog: {
      headers: { 'set-cookie': true },
      body: { archives: { response: true } }
    }
  })
}

export function formatBsbSmsApiDate (userDate) {
  if (!isValidDate(userDate)) {
    throw new Error('valid date should be provided')
  }
  const date = patchTimezone(userDate)
  return [
    date.getUTCDate(),
    date.getUTCMonth() + 1,
    date.getUTCFullYear()
  ].map((number) => padLeft(number, 2, '0')).join('.')
}

export async function fetchSmsTransactions (cardId, fromDate, toDate) {
  const dateSeparator = '.'
  const response = await fetchJson(makeApiUrl(`/cards/${cardId}/sms`, { lang }), {
    method: 'POST',
    body: {
      fromDate: formatBsbSmsApiDate(fromDate, dateSeparator),
      toDate: formatBsbSmsApiDate(toDate || new Date(), dateSeparator)
    },
    sanitizeResponseLog: {
      headers: { 'set-cookie': true },
      body: { last4: true }
    }
  })
  assertResponseSuccess(response)
  return response.body
}

export function formatBsbStatementApiDate (userDate) {
  if (!isValidDate(userDate)) {
    throw new Error('valid date should be provided')
  }
  const date = patchTimezone(userDate)
  return [
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate()
  ].map((number) => padLeft(number, 2, '0')).join('')
}

export async function fetchStatementTransactions (cardId, fromDate, toDate) {
  const dateSeparator = ''
  const response = await fetchJson(makeApiUrl(`/cards/${cardId}/statement`, { lang }), {
    method: 'POST',
    body: {
      fromDate: formatBsbStatementApiDate(fromDate, dateSeparator),
      toDate: formatBsbStatementApiDate(toDate || new Date(), dateSeparator)
    },
    sanitizeResponseLog: {
      headers: { 'set-cookie': true }
    }
  })
  assertResponseSuccess(response)
  return response.body.transactions
}

export function currencyCodeToIsoCurrency (currencyCode) {
  console.assert(currencyCode in codeToCurrencyLookup, 'unknown currency', currencyCode)
  return codeToCurrencyLookup[currencyCode]
}
