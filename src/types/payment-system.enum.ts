export enum PaymentSystem {
    qiwi = 'qiwi'
}
export const PaymentSystemInfo = {
    [PaymentSystem.qiwi]: {
        icon: require('@/assets/img/qiwi_logo.png'),
        name: "Qiwi"
    }
}