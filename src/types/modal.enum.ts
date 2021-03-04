export enum ModalName {
    antifraudAddParam = 'antiform-add-param',
    paymentSystemsAdd = 'payment-systems-add',
    paymentInfo = 'payment-info',
    approvePhone = 'approve-phone'
}

export const ModalComponents = {
    [ModalName.antifraudAddParam]: () => import('@/components/Modals/AntifraudAddParamModal.vue'),
    [ModalName.paymentSystemsAdd]: () => import("@/components/Modals/PaymentSystemsAddModal.vue"),
    [ModalName.paymentInfo]: () => import("@/components/Modals/PaymentInfoModal.vue"),
    [ModalName.approvePhone]: () => import("@/components/Modals/ApprovePhoneModal.vue")
}