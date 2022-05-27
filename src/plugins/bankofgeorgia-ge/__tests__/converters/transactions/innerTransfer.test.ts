import { convertTransaction } from '../../../converters'
import { accountGel, accountUsd, depositGel, depositUSD } from '../../../tests-common/accounts'
import { adjustTransactions } from '../../../../../common/transactionGroupHandler'
import { ExtendedTransaction } from '../../../../../types/zenmoney'

describe('convertTransaction', () => {
  it.each([
    [
      {
        usdTransaction:
          {
            statmentId: 29880372596,
            acctKey: 11574546313,
            entryId: 50580570554,
            docKey: 13241927438,
            essId: null,
            nomination: 'Income - Amount USD1800.00; Foreign Exchange. FX Rate:3.04. Counter-amount: GEL5,472.. Conversion',
            entryGroup: null,
            merchantId: null,
            postDate: 1651780800000,
            authDateStr: null,
            inpSysdate: 1651836180000,
            operationDate: 1651780800000,
            amount: -1800,
            oppositeAmount: null,
            ccy: 'USD',
            clientComment: null,
            canCopy: 'N',
            status: 'P',
            groupDescription: null,
            groupType: null,
            docNomination: null,
            beneficiary: null,
            bonusPoint: null,
            merchantName: null,
            merchantNameInt: null,
            amountBase: -5471.64,
            entryGroupDKey: 'text.entry.group.name.Currency.Exchange',
            entryGroupDValue: null,
            entryGroupNameId: 2,
            bonusInfo: null,
            essServiceId: null,
            merchantClientId: null,
            cashbackAmount: null,
            groupImageId: 35623076,
            nominationOriginal: 'Foreign Exchange. FX Rate:3.04. Counter-amount: GEL5,472.. Conversion',
            productName: null,
            prodGroup: 'CCO',
            entryType: 'CCO',
            printSwift: 'N',
            isPrintable: 'Y',
            printFormType: 'IN_TRANSFER',
            hasTransferBack: 'N',
            benefProfileId: null,
            positiveSum: null,
            negativeSum: null,
            isInternalOperation: 'Y',
            transferBankBic: null,
            deviceType: null,
            swiftGpiFlag: 'N',
            counterPartyClientKey: null,
            authDate: null,
            bonusPointType: null,
            attachmentFileBase64: null,
            isRepeatAllowed: false,
            isTemplateAllowed: false,
            isDDSTOAlllowed: false,
            isStatementAllowed: true,
            isPrintAllowed: false,
            isReversalAvailable: false,
            entryIconBase64: null,
            merchantIconBase64: null,
            providerIconUrl: null,
            groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623076&hashCode=41CAFF07AC2BC8F79D6ECCCDD8EFF8EF',
            imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623076&hashCode=41CAFF07AC2BC8F79D6ECCCDD8EFF8EF',
            benefProfilePicture: null,
            operationTitle: 'Foreign Exchange. FX Rate:3.04. Counter-amount: GEL5,472.. Conversion',
            entryDetailType: null,
            pfmId: 4977641575,
            pfmForecast: false,
            pfmCatId: 640,
            pfmCatName: null,
            pfmParentCatId: 590,
            pfmParentCatName: null,
            pfmRecurring: false,
            pfmSplit: false,
            pfmParentOpId: null,
            pfmTagId: null,
            pfmTagName: null,
            pfmTags: null,
            pfmComputable: false,
            isRuleCreationEnabled: true,
            canSplit: false,
            isCarTemplateAllowed: false
          },
        gelTransaction: {
          statmentId: 29880372737,
          acctKey: 11574546312,
          entryId: 50580570548,
          docKey: 13241927438,
          essId: null,
          nomination: 'Payment - Amount GEL5472.00; Foreign Exchange. FX Rate:3.04. Counter-amount: USD1,800.. Conversion',
          entryGroup: null,
          merchantId: null,
          postDate: 1651780800000,
          authDateStr: null,
          inpSysdate: 1651836180000,
          operationDate: 1651780800000,
          amount: 5472,
          oppositeAmount: null,
          ccy: 'GEL',
          clientComment: null,
          canCopy: 'Y',
          status: 'P',
          groupDescription: null,
          groupType: null,
          docNomination: null,
          beneficiary: null,
          bonusPoint: null,
          merchantName: null,
          merchantNameInt: null,
          amountBase: 5472,
          entryGroupDKey: 'text.entry.group.name.Currency.Exchange',
          entryGroupDValue: null,
          entryGroupNameId: 2,
          bonusInfo: null,
          essServiceId: null,
          merchantClientId: null,
          cashbackAmount: null,
          groupImageId: 35623076,
          nominationOriginal: 'Foreign Exchange. FX Rate:3.04. Counter-amount: USD1,800.. Conversion',
          productName: null,
          prodGroup: 'CCO',
          entryType: 'CCO',
          printSwift: 'N',
          isPrintable: 'Y',
          printFormType: 'OUT_TRANSFER',
          hasTransferBack: 'N',
          benefProfileId: null,
          positiveSum: null,
          negativeSum: null,
          isInternalOperation: 'Y',
          transferBankBic: null,
          deviceType: null,
          swiftGpiFlag: 'N',
          counterPartyClientKey: null,
          authDate: null,
          bonusPointType: null,
          attachmentFileBase64: null,
          isRepeatAllowed: true,
          isTemplateAllowed: false,
          isDDSTOAlllowed: true,
          isStatementAllowed: true,
          isPrintAllowed: true,
          isReversalAvailable: false,
          entryIconBase64: null,
          merchantIconBase64: null,
          providerIconUrl: null,
          groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623076&hashCode=41CAFF07AC2BC8F79D6ECCCDD8EFF8EF',
          imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623076&hashCode=41CAFF07AC2BC8F79D6ECCCDD8EFF8EF',
          benefProfilePicture: null,
          operationTitle: 'Foreign Exchange. FX Rate:3.04. Counter-amount: USD1,800.. Conversion',
          entryDetailType: null,
          pfmId: 4979161606,
          pfmForecast: false,
          pfmCatId: 640,
          pfmCatName: null,
          pfmParentCatId: 590,
          pfmParentCatName: null,
          pfmRecurring: false,
          pfmSplit: false,
          pfmParentOpId: null,
          pfmTagId: null,
          pfmTagName: null,
          pfmTags: null,
          pfmComputable: false,
          isRuleCreationEnabled: true,
          canSplit: true,
          isCarTemplateAllowed: false
        }
      },
      [
        {
          comment: null,
          date: new Date('2022-05-06T15:23:00.000+04:00'),
          hold: false,
          merchant: null,
          movements: [
            {
              account: {
                id: '1337'
              },
              fee: 0,
              id: '29880372737',
              invoice: null,
              sum: -5472
            },
            {
              account: {
                id: '1338'
              },
              fee: 0,
              id: '29880372596',
              invoice: null,
              sum: 1800
            }
          ]
        }
      ]
    ]
  ])('converts inner IN OUT transfer (Foreign Exchange)', ({ gelTransaction, usdTransaction }, transactions) => {
    expect(adjustTransactions({
      transactions: [
        convertTransaction(gelTransaction, accountGel)!,
        convertTransaction(usdTransaction, accountUsd)!
      ]
    })).toEqual(transactions)
  })
})

describe('convertTransaction', () => {
  it.each([
    [
      {
        usdTransaction: {
          statmentId: 31090798250,
          acctKey: 11578227155,
          entryId: 51466512571,
          docKey: 13505054448,
          essId: null,
          nomination: 'Income - Amount USD300.00; Automatic conversion, rate: 3.021',
          entryGroup: null,
          merchantId: null,
          postDate: 1654372800000,
          authDateStr: null,
          inpSysdate: 1654464570000,
          operationDate: 1654372800000,
          amount: -300,
          oppositeAmount: null,
          ccy: 'USD',
          clientComment: null,
          canCopy: 'N',
          status: 'P',
          groupDescription: null,
          groupType: null,
          docNomination: null,
          beneficiary: null,
          bonusPoint: null,
          merchantName: null,
          merchantNameInt: null,
          amountBase: -891.21,
          entryGroupDKey: 'text.entry.group.name.Currency.Exchange',
          entryGroupDValue: null,
          entryGroupNameId: 2,
          bonusInfo: null,
          essServiceId: null,
          merchantClientId: null,
          cashbackAmount: null,
          groupImageId: 35623076,
          nominationOriginal: 'Automatic conversion, rate: 3.021',
          productName: null,
          prodGroup: 'KRN',
          entryType: 'PLC',
          printSwift: 'N',
          isPrintable: 'N',
          printFormType: 'OTHER',
          hasTransferBack: 'N',
          benefProfileId: null,
          positiveSum: null,
          negativeSum: null,
          isInternalOperation: 'Y',
          transferBankBic: null,
          deviceType: null,
          swiftGpiFlag: 'N',
          counterPartyClientKey: null,
          authDate: null,
          bonusPointType: null,
          attachmentFileBase64: null,
          isRepeatAllowed: false,
          isTemplateAllowed: false,
          isDDSTOAlllowed: false,
          isStatementAllowed: true,
          isPrintAllowed: false,
          isReversalAvailable: false,
          entryIconBase64: null,
          merchantIconBase64: null,
          providerIconUrl: null,
          groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623076&hashCode=41CAFF07AC2BC8F79D6ECCCDD8EFF8EF',
          imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623076&hashCode=41CAFF07AC2BC8F79D6ECCCDD8EFF8EF',
          benefProfilePicture: null,
          operationTitle: 'Automatic conversion, rate: 3.021',
          entryDetailType: null,
          pfmId: 5192649887,
          pfmForecast: false,
          pfmCatId: 640,
          pfmCatName: null,
          pfmParentCatId: 590,
          pfmParentCatName: null,
          pfmRecurring: false,
          pfmSplit: false,
          pfmParentOpId: null,
          pfmTagId: null,
          pfmTagName: null,
          pfmTags: null,
          pfmComputable: false,
          isRuleCreationEnabled: false,
          canSplit: false,
          isCarTemplateAllowed: false
        },
        gelTransaction: {
          statmentId: 31058542406,
          acctKey: 11578227154,
          entryId: 51466512566,
          docKey: 13505054448,
          essId: null,
          nomination: 'Payment - Amount GEL906.30; Automatic conversion, rate: 3.021',
          entryGroup: null,
          merchantId: null,
          postDate: 1654372800000,
          authDateStr: null,
          inpSysdate: 1654464570000,
          operationDate: 1654372800000,
          amount: 906.3,
          oppositeAmount: null,
          ccy: 'GEL',
          clientComment: null,
          canCopy: 'N',
          status: 'P',
          groupDescription: null,
          groupType: null,
          docNomination: null,
          beneficiary: null,
          bonusPoint: null,
          merchantName: null,
          merchantNameInt: null,
          amountBase: 906.3,
          entryGroupDKey: 'text.entry.group.name.Currency.Exchange',
          entryGroupDValue: null,
          entryGroupNameId: 2,
          bonusInfo: null,
          essServiceId: null,
          merchantClientId: null,
          cashbackAmount: null,
          groupImageId: 35623076,
          nominationOriginal: 'Automatic conversion, rate: 3.021',
          productName: null,
          prodGroup: 'KRN',
          entryType: 'PLC',
          printSwift: 'N',
          isPrintable: 'N',
          printFormType: 'OTHER',
          hasTransferBack: 'N',
          benefProfileId: null,
          positiveSum: null,
          negativeSum: null,
          isInternalOperation: 'Y',
          transferBankBic: null,
          deviceType: null,
          swiftGpiFlag: 'N',
          counterPartyClientKey: null,
          authDate: null,
          bonusPointType: null,
          attachmentFileBase64: null,
          isRepeatAllowed: false,
          isTemplateAllowed: false,
          isDDSTOAlllowed: false,
          isStatementAllowed: true,
          isPrintAllowed: false,
          isReversalAvailable: false,
          entryIconBase64: null,
          merchantIconBase64: null,
          providerIconUrl: null,
          groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623076&hashCode=41CAFF07AC2BC8F79D6ECCCDD8EFF8EF',
          imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623076&hashCode=41CAFF07AC2BC8F79D6ECCCDD8EFF8EF',
          benefProfilePicture: null,
          operationTitle: 'Automatic conversion, rate: 3.021',
          entryDetailType: null,
          pfmId: 5193615300,
          pfmForecast: false,
          pfmCatId: 640,
          pfmCatName: null,
          pfmParentCatId: 590,
          pfmParentCatName: null,
          pfmRecurring: false,
          pfmSplit: false,
          pfmParentOpId: null,
          pfmTagId: null,
          pfmTagName: null,
          pfmTags: null,
          pfmComputable: false,
          isRuleCreationEnabled: false,
          canSplit: true,
          isCarTemplateAllowed: false
        }
      },
      [
        {
          comment: null,
          date: new Date('2022-06-05T21:29:30.000Z'),
          hold: false,
          merchant: null,
          movements: [
            {
              account: {
                id: '1337'
              },
              fee: 0,
              id: '31058542406',
              invoice: null,
              sum: -906.3
            },
            {
              account: {
                id: '1338'
              },
              fee: 0,
              id: '31090798250',
              invoice: null,
              sum: 300
            }
          ]
        }
      ]
    ]
  ])('converts inner OTHER transfer (Foreign Exchange)', ({ gelTransaction, usdTransaction }, transactions) => {
    expect(adjustTransactions({
      transactions: [
        convertTransaction(gelTransaction, accountGel)!,
        convertTransaction(usdTransaction, accountUsd)!
      ]
    })).toEqual(transactions)
  })
})

describe('convertTransaction', () => {
  it.each([
    [
      {
        cardTransactions: [
          {
            statmentId: 30443223320,
            acctKey: 11578997519,
            entryId: 50975846237,
            docKey: 13363643144,
            essId: null,
            nomination: 'Payment - Amount GEL50.00; Placing funds on deposit ',
            entryGroup: null,
            merchantId: null,
            postDate: 1652990400000,
            authDateStr: null,
            inpSysdate: 1653049282000,
            operationDate: 1652990400000,
            amount: 50,
            oppositeAmount: null,
            ccy: 'GEL',
            clientComment: null,
            canCopy: 'N',
            status: 'P',
            groupDescription: null,
            groupType: null,
            docNomination: null,
            beneficiary: null,
            bonusPoint: null,
            merchantName: null,
            merchantNameInt: null,
            amountBase: 50,
            entryGroupDKey: 'text.entry.group.name.Interest.Accrue',
            entryGroupDValue: null,
            entryGroupNameId: 10,
            bonusInfo: null,
            essServiceId: null,
            merchantClientId: null,
            cashbackAmount: null,
            groupImageId: 35623079,
            nominationOriginal: 'Placing funds on deposit ',
            productName: 'Accumulative Deposit',
            prodGroup: 'CDS',
            entryType: 'CDS',
            printSwift: 'N',
            isPrintable: 'N',
            printFormType: 'OTHER',
            hasTransferBack: 'N',
            benefProfileId: null,
            positiveSum: null,
            negativeSum: null,
            isInternalOperation: 'Y',
            transferBankBic: null,
            deviceType: null,
            swiftGpiFlag: 'N',
            counterPartyClientKey: null,
            authDate: null,
            bonusPointType: null,
            attachmentFileBase64: null,
            isRepeatAllowed: false,
            isTemplateAllowed: false,
            isDDSTOAlllowed: false,
            isStatementAllowed: true,
            isPrintAllowed: false,
            isReversalAvailable: false,
            entryIconBase64: null,
            merchantIconBase64: null,
            providerIconUrl: null,
            groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623079&hashCode=F9AC85527AA967B009F68D550C8ABD15',
            imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623079&hashCode=F9AC85527AA967B009F68D550C8ABD15',
            benefProfilePicture: null,
            operationTitle: 'Accumulative Deposit',
            entryDetailType: null,
            pfmId: 5077529897,
            pfmForecast: false,
            pfmCatId: 630,
            pfmCatName: null,
            pfmParentCatId: 590,
            pfmParentCatName: null,
            pfmRecurring: false,
            pfmSplit: false,
            pfmParentOpId: null,
            pfmTagId: null,
            pfmTagName: null,
            pfmTags: null,
            pfmComputable: false,
            isRuleCreationEnabled: false,
            canSplit: false,
            isCarTemplateAllowed: false
          }
        ],
        depositTransactions: [
          {
            statmentId: 30443223109,
            acctKey: 11579131107,
            entryId: 50975846236,
            docKey: 13363643144,
            essId: null,
            nomination: 'Income - Amount GEL50.00; Placing funds on deposit ',
            entryGroup: null,
            merchantId: null,
            postDate: 1652990400000,
            authDateStr: null,
            inpSysdate: 1653049282000,
            operationDate: 1652990400000,
            amount: -50,
            oppositeAmount: null,
            ccy: 'GEL',
            clientComment: null,
            canCopy: 'N',
            status: 'P',
            groupDescription: null,
            groupType: null,
            docNomination: null,
            beneficiary: null,
            bonusPoint: null,
            merchantName: null,
            merchantNameInt: null,
            amountBase: -50,
            entryGroupDKey: 'text.entry.group.name.Interest.Accrue',
            entryGroupDValue: null,
            entryGroupNameId: 10,
            bonusInfo: null,
            essServiceId: null,
            merchantClientId: null,
            cashbackAmount: null,
            groupImageId: 35623079,
            nominationOriginal: 'Placing funds on deposit ',
            productName: 'Accumulative Deposit',
            prodGroup: 'CDS',
            entryType: 'CDS',
            printSwift: 'N',
            isPrintable: 'N',
            printFormType: 'OTHER',
            hasTransferBack: 'N',
            benefProfileId: null,
            positiveSum: null,
            negativeSum: null,
            isInternalOperation: 'Y',
            transferBankBic: null,
            deviceType: null,
            swiftGpiFlag: 'N',
            counterPartyClientKey: null,
            authDate: null,
            bonusPointType: null,
            attachmentFileBase64: null,
            isRepeatAllowed: false,
            isTemplateAllowed: false,
            isDDSTOAlllowed: false,
            isStatementAllowed: true,
            isPrintAllowed: false,
            isReversalAvailable: false,
            entryIconBase64: null,
            merchantIconBase64: null,
            providerIconUrl: null,
            groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623079&hashCode=F9AC85527AA967B009F68D550C8ABD15',
            imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623079&hashCode=F9AC85527AA967B009F68D550C8ABD15',
            benefProfilePicture: null,
            operationTitle: 'Accumulative Deposit',
            entryDetailType: null,
            pfmId: 5077529809,
            pfmForecast: false,
            pfmCatId: 630,
            pfmCatName: null,
            pfmParentCatId: 590,
            pfmParentCatName: null,
            pfmRecurring: false,
            pfmSplit: false,
            pfmParentOpId: null,
            pfmTagId: null,
            pfmTagName: null,
            pfmTags: null,
            pfmComputable: false,
            isRuleCreationEnabled: false,
            canSplit: false,
            isCarTemplateAllowed: false
          },
          {
            statmentId: 30443223140,
            acctKey: 11579131107,
            entryId: 50975846238,
            docKey: 13363643144,
            essId: null,
            nomination: 'Payment - Amount GEL50.00; Placing funds on deposit ',
            entryGroup: null,
            merchantId: null,
            postDate: 1652990400000,
            authDateStr: null,
            inpSysdate: 1653049282000,
            operationDate: 1652990400000,
            amount: 50,
            oppositeAmount: null,
            ccy: 'GEL',
            clientComment: null,
            canCopy: 'N',
            status: 'P',
            groupDescription: null,
            groupType: null,
            docNomination: null,
            beneficiary: null,
            bonusPoint: null,
            merchantName: null,
            merchantNameInt: null,
            amountBase: 50,
            entryGroupDKey: 'text.entry.group.name.Interest.Accrue',
            entryGroupDValue: null,
            entryGroupNameId: 10,
            bonusInfo: null,
            essServiceId: null,
            merchantClientId: null,
            cashbackAmount: null,
            groupImageId: 35623079,
            nominationOriginal: 'Placing funds on deposit ',
            productName: 'Accumulative Deposit',
            prodGroup: 'CDS',
            entryType: 'CDS',
            printSwift: 'N',
            isPrintable: 'N',
            printFormType: 'OTHER',
            hasTransferBack: 'N',
            benefProfileId: null,
            positiveSum: null,
            negativeSum: null,
            isInternalOperation: 'Y',
            transferBankBic: null,
            deviceType: null,
            swiftGpiFlag: 'N',
            counterPartyClientKey: null,
            authDate: null,
            bonusPointType: null,
            attachmentFileBase64: null,
            isRepeatAllowed: false,
            isTemplateAllowed: false,
            isDDSTOAlllowed: false,
            isStatementAllowed: true,
            isPrintAllowed: false,
            isReversalAvailable: false,
            entryIconBase64: null,
            merchantIconBase64: null,
            providerIconUrl: null,
            groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623079&hashCode=F9AC85527AA967B009F68D550C8ABD15',
            imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623079&hashCode=F9AC85527AA967B009F68D550C8ABD15',
            benefProfilePicture: null,
            operationTitle: 'Accumulative Deposit',
            entryDetailType: null,
            pfmId: 5077529808,
            pfmForecast: false,
            pfmCatId: 630,
            pfmCatName: null,
            pfmParentCatId: 590,
            pfmParentCatName: null,
            pfmRecurring: false,
            pfmSplit: false,
            pfmParentOpId: null,
            pfmTagId: null,
            pfmTagName: null,
            pfmTags: null,
            pfmComputable: false,
            isRuleCreationEnabled: false,
            canSplit: false,
            isCarTemplateAllowed: false
          }
        ]
      },
      [
        {
          comment: null,
          date: new Date('2022-05-20T16:21:22.000+04:00'),
          hold: false,
          merchant: null,
          movements: [
            {
              account: {
                id: '1337'
              },
              fee: 0,
              id: '30443223320',
              invoice: null,
              sum: -50
            },
            {
              account: {
                id: '1339'
              },
              fee: 0,
              id: '30443223109',
              invoice: null,
              sum: 50
            }
          ]
        }
      ]
    ]
  ])('converts inner transfer to deposit', ({ cardTransactions, depositTransactions }, transactions) => {
    expect(adjustTransactions({
      transactions: [
        ...cardTransactions.map(cardTransaction => convertTransaction(cardTransaction, accountGel)).filter(x => x != null) as ExtendedTransaction[],
        ...depositTransactions.map(depositTransaction => convertTransaction(depositTransaction, depositGel)).filter(x => x != null) as ExtendedTransaction[]
      ]
    })).toEqual(transactions)
  })
})

describe('convertTransaction', () => {
  it.each([
    [
      {
        cardTransactions: [
          {
            statmentId: 37014488874,
            acctKey: 11573059596,
            entryId: 56344273885,
            docKey: 14989955407,
            essId: null,
            nomination: 'Outgoing Transfer - Amount: USD3,000.00; Beneficiary: ANTON ANTONOV; Account: GE34BG0000000537046615USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
            entryGroup: null,
            merchantId: null,
            postDate: 1667419200000,
            authDateStr: null,
            inpSysdate: 1667477483000,
            operationDate: 1667419200000,
            amount: 3000,
            oppositeAmount: null,
            ccy: 'USD',
            clientComment: null,
            canCopy: 'Y',
            status: 'A',
            groupDescription: null,
            groupType: null,
            docNomination: 'Transfer to Deposit',
            beneficiary: 'ANTON ANTONOV',
            bonusPoint: null,
            merchantName: null,
            merchantNameInt: null,
            amountBase: 8278.8,
            entryGroupDKey: 'text.entry.group.name.Transfer',
            entryGroupDValue: null,
            entryGroupNameId: 6,
            bonusInfo: null,
            essServiceId: null,
            merchantClientId: null,
            cashbackAmount: null,
            groupImageId: 35623084,
            nominationOriginal: 'Outgoing Transfer - Amount: USD3,000.00; Beneficiary: ANTON ANTONOV; Account: GE34BG0000000537046615USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
            productName: null,
            prodGroup: 'PMI',
            entryType: 'PMI',
            printSwift: 'N',
            isPrintable: 'Y',
            printFormType: 'OUT_TRANSFER',
            hasTransferBack: 'N',
            benefProfileId: null,
            positiveSum: null,
            negativeSum: null,
            isInternalOperation: 'Y',
            transferBankBic: 'BAGAGE22',
            deviceType: null,
            swiftGpiFlag: 'N',
            counterPartyClientKey: null,
            gifUrl: null,
            gifId: null,
            authDate: null,
            bonusPointType: null,
            attachmentFileBase64: null,
            isRepeatAllowed: true,
            isTemplateAllowed: false,
            isDDSTOAlllowed: true,
            isStatementAllowed: true,
            isPrintAllowed: true,
            isReversalAvailable: false,
            entryIconBase64: null,
            merchantIconBase64: null,
            providerIconUrl: null,
            groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623084&hashCode=F87F8788EE5FCD976B8E8D01B3ACC654',
            imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623084&hashCode=F87F8788EE5FCD976B8E8D01B3ACC654',
            benefProfilePicture: null,
            operationTitle: 'ANTON ANTONOV',
            entryDetailType: null,
            pfmId: 6350238832,
            pfmForecast: false,
            pfmCatId: 630,
            pfmCatName: null,
            pfmParentCatId: 590,
            pfmParentCatName: null,
            pfmRecurring: false,
            pfmSplit: false,
            pfmParentOpId: null,
            pfmTagId: null,
            pfmTagName: null,
            pfmTags: null,
            pfmComputable: false,
            isRuleCreationEnabled: true,
            canSplit: true,
            isCarTemplateAllowed: false
          }
        ],
        depositTransactions: [
          {
            statmentId: 37014488883,
            acctKey: 11578607953,
            entryId: 56344273884,
            docKey: 14989955407,
            essId: null,
            nomination: 'Incoming Transfer - Amount: USD3,000.00; Sender: გარიპოვა ქსენიია; Account: GE82BG0000000534096272USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
            entryGroup: null,
            merchantId: null,
            postDate: 1667419200000,
            authDateStr: null,
            inpSysdate: 1667477483000,
            operationDate: 1667419200000,
            amount: -3000,
            oppositeAmount: null,
            ccy: 'USD',
            clientComment: null,
            canCopy: 'N',
            status: 'A',
            groupDescription: null,
            groupType: null,
            docNomination: 'Transfer to Deposit',
            beneficiary: 'გარიპოვა ქსენიია',
            bonusPoint: null,
            merchantName: null,
            merchantNameInt: null,
            amountBase: -8278.8,
            entryGroupDKey: 'text.entry.group.name.Income',
            entryGroupDValue: null,
            entryGroupNameId: 5,
            bonusInfo: null,
            essServiceId: null,
            merchantClientId: null,
            cashbackAmount: null,
            groupImageId: 35623078,
            nominationOriginal: 'Incoming Transfer - Amount: USD3,000.00; Sender: გარიპოვა ქსენიია; Account: GE82BG0000000534096272USD; Bank: Bank Of Georgia BAGAGE22; Details: Transfer to Deposit',
            productName: null,
            prodGroup: 'PMI',
            entryType: 'PMI',
            printSwift: 'N',
            isPrintable: 'Y',
            printFormType: 'IN_TRANSFER',
            hasTransferBack: 'Y',
            benefProfileId: null,
            positiveSum: null,
            negativeSum: null,
            isInternalOperation: 'Y',
            transferBankBic: 'BAGAGE22',
            deviceType: null,
            swiftGpiFlag: 'N',
            counterPartyClientKey: null,
            gifUrl: null,
            gifId: null,
            authDate: null,
            bonusPointType: null,
            attachmentFileBase64: null,
            isRepeatAllowed: false,
            isTemplateAllowed: false,
            isDDSTOAlllowed: false,
            isStatementAllowed: true,
            isPrintAllowed: true,
            isReversalAvailable: false,
            entryIconBase64: null,
            merchantIconBase64: null,
            providerIconUrl: null,
            groupImageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623078&hashCode=DE3E0F781F86C1E3C9652CBF00F43784',
            imageUrl: 'serviceId=COMMON_GET_FILE&channel=MOBILE&id=35623078&hashCode=DE3E0F781F86C1E3C9652CBF00F43784',
            benefProfilePicture: null,
            operationTitle: 'გარიპოვა ქსენიია',
            entryDetailType: null,
            pfmId: 6350289939,
            pfmForecast: false,
            pfmCatId: 630,
            pfmCatName: null,
            pfmParentCatId: 590,
            pfmParentCatName: null,
            pfmRecurring: false,
            pfmSplit: false,
            pfmParentOpId: null,
            pfmTagId: null,
            pfmTagName: null,
            pfmTags: null,
            pfmComputable: false,
            isRuleCreationEnabled: true,
            canSplit: false,
            isCarTemplateAllowed: false
          }
        ]
      },
      [
        {
          date: new Date('2022-11-03T12:11:23.000Z'),
          hold: false,
          merchant: null,
          movements: [
            {
              account: {
                id: '1338'
              },
              fee: 0,
              id: '37014488874',
              invoice: null,
              sum: -3000
            },
            {
              account: {
                id: '1340'
              },
              fee: 0,
              id: '37014488883',
              invoice: null,
              sum: 3000
            }
          ],
          comment: 'Transfer to Deposit'
        }
      ]
    ]
  ])('converts inner transfer to deposit', ({ cardTransactions, depositTransactions }, transactions) => {
    expect(adjustTransactions({
      transactions: [
        ...cardTransactions.map(cardTransaction => convertTransaction(cardTransaction, accountUsd)).filter(x => x != null) as ExtendedTransaction[],
        ...depositTransactions.map(depositTransaction => convertTransaction(depositTransaction, depositUSD)).filter(x => x != null) as ExtendedTransaction[]
      ]
    })).toEqual(transactions)
  })
})
