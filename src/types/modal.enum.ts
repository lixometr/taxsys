export enum ModalName {
    antifraudAddParam = 'antiform-add-param',
    paymentSystemsAdd = 'payment-systems-add',
    paymentInfo = 'payment-info',
    approvePhone = 'approve-phone',
    addCard = 'add-card',
    changeBalance = 'change-balance',
    blockCar = 'block-car',
    addCarRecord = 'add-car-record',
    addStaff = 'add-staff',
    addPaymentGroup = 'add-payment-group',
    addDispetcher = 'add-dispetcher',
    giveCar = 'give-car',
    changeDriverBalance = 'change-driver-balance',
    connectDriver = 'connect-driver',
    widgetCode = 'widget-code',

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
    [ModalName.addPaymentGroup]: () => import("@/components/Modals/AddPaymentGroupModal.vue"),
    [ModalName.addDispetcher]: () => import("@/components/Modals/AddDispetcherModal.vue"),
    [ModalName.giveCar]: () => import("@/components/Modals/GiveCarModal.vue"),
    [ModalName.changeDriverBalance]: () => import("@/components/Modals/ChangeDriverBalanceModal.vue"),
    [ModalName.connectDriver]: () => import("@/components/Modals/ConnectDriverModal.vue"),
    [ModalName.widgetCode]: () => import("@/components/Modals/WidgetCodeModal.vue"),
    
}