export class Application {
    allow_blacklist: boolean
    app_name: string
    contacts: { site: string, phone: string, whatsapp: string, viber: string, telegram: string, instagram: string }
    cost: number
    created_at: string
    google_dev: string
    id: number
    need_design: boolean
    order_type: "buy"|"rent"
    partner_id: number
    stop_reg: boolean
    wishes: string
    images: Array<{url: string}>
}