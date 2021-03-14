export enum ModalName {
    antifraudAddParam = 'antiform-add-param',
    paymentSystemsAdd = 'payment-systems-add',
    paymentInfo = 'payment-info',
    approvePhone = 'approve-phone',
    addCard = 'add-card',
    changeBalance = 'change-balance',
    blockCar = 'block-car',
    addCarRecord = 'add-car-record',
    addStaff = 'add-staff'
}

export const ModalComponents = {
    [ModalName.antifraudAddParam]: () => import('@/components/Modals/AntifraudAddParamModal.vue'),
    [ModalName.paymentSystemsAdd]: () => import("@/components/Modals/PaymentSystemsAddModal.vue"),
    [ModalName.paymentInfo]: () => import("@/components/Modals/PaymentInfoModal.vue"),
    [ModalName.approvePhone]: () => import("@/components/Modals/ApprovePhoneModal.vue"),
    [ModalName.addCard]: () => import("@/components/Modals/AddCardModal.vue"),
    [ModalName.changeBalance]: () => import("@/components/Modals/ChangeBalanceModal.vue"),
    [ModalName.blockCar]: () => import("@/components/Modals/BlockCarModal.vue"),
    [ModalName.addCarRecord]: () => import("@/components/Modals/AddCarRecordModal.vue"),
    [ModalName.addStaff]: () => import("@/components/Modals/AddStaffModal.vue"),
    
}