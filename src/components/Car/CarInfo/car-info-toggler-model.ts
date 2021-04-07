import { useApiCarUpdateRequests } from "@/api/car";
import { CarRequestsDto } from "@/dto/car-requests.dto";
import { errorHandler } from "@/helpers/error-handler";
import { computed } from "@vue/composition-api";
import { plainToClass } from "class-transformer";

export const useCarInfoInteger = ({item, field, onUpdate}: {item: any, field: string, onUpdate: Function}) => {
    const booleanItem = computed(() => item.value.options && !!item.value.options[field]);
    const intItem = computed(
        () => item.value.options && item.value.options[field]?.toString() || '0'
    );

    const onChange = async (newValue: boolean) => {
        if (newValue === true) return
        const { exec, error } = useApiCarUpdateRequests({
            toast: { error: errorHandler(), success: () => "Обновлено" },
        });
        const data: CarRequestsDto = {
            ...item.value.options,
            [field]: newValue,
        };
        const toSend = plainToClass(CarRequestsDto, data);
        await exec({ id: item.value.id, data: toSend });
        onUpdate()
        if (error.value) return;
    };
    return {
        onChange,
        booleanItem,
        intItem
    }
}