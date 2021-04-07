import { PhoneTransfom } from "@/transformers/phone.transform";

export class CarTrackerDto {
    @PhoneTransfom()
    phone: string
    block_code: string
    unblock_code: string
}