export enum ModalName {
    antifraudAddParam = 'antiform-add-param',
    paymentSystemsAdd = 'payment-systems-add'
}

export const ModalComponents = {
    [ModalName.antifraudAddParam]: () => import('@/components/Modals/AntifraudAddParamModal.vue'),
    [ModalName.paymentSystemsAdd]: () => import("@/components/Modals/PaymentSystemsAddModal.vue")
}