import { AgregName } from "@/types/agregator.enum"
import { ImageEntity } from "./image.entity"

export class Widget {
    agreg: AgregName
    app_url: string
    code: string
    created_at: string
    id: number
    partner_id: number
    site_url: string
    text_color: string
    title: string
    title_color: string
    type: string
    images: [ImageEntity]
}