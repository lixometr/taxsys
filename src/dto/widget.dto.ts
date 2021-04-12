import { FileTransform } from "@/transformers/file.transform"
import { Type } from "class-transformer"

export class CreateWidgetDto {
    site_url: string
    agreg: string
    app_url: string
    title: string
    title_color: string
    text_color: string
    
    @Type(() => Blob)
    @FileTransform()
    background: Blob
}