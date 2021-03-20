export enum PaymentSystem {
    qiwi = 'qiwi',
    tinkoff = 'tinkoff'
}
export const PaymentSystemInfo = {
    [PaymentSystem.qiwi]: {
        icon: require('@/assets/img/qiwi_logo.png'),
        name: "Qiwi"
    },
    [PaymentSystem.tinkoff]: {
        icon: '',
        name: "Tinkoff"
    }
    
}