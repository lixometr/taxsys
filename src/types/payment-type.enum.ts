export enum PaymentName {
    cash = 'cash',
    cashless = 'cashless',
    corp = 'corp'
}
export const PaymentType = {
    [PaymentName.cashless]: {
        icon: require('@/assets/icons/credit-card.svg'),
        name: "Оплата картой"
    },
    [PaymentName.corp]: {
        icon: require('@/assets/icons/credit-card.svg'),
        name: "Оплата картой"
    },
    [PaymentName.cash]: {
        icon: require('@/assets/icons/cash.svg'),
        name: "Наличными"
    },
}

export enum PaymentAgregator {
    qiwi = 'qiwi',
    card = 'card'
}
export const PaymentAgregatorById = {
    1: PaymentAgregator.qiwi,
    0: PaymentAgregator.card
}