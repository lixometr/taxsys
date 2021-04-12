import useApi, { UseApiOptions } from "@/compositions/useApi";
import { UpdateNotificationsDto } from "@/dto/notification.dto";
import { AntifraudEntity } from "@/models/antifraud.entity";
import { classToPlain } from "class-transformer";



export const useApiUpdateNotifications = (opts?: UseApiOptions) => useApi<UpdateNotificationsDto, any>(
    (updateDto) => ({
        method: "PUT",
        url: '/user',
        data: {
            notifications: classToPlain(updateDto)
        }
    }), opts)