import { reactive, ref, Ref, watch } from "@vue/composition-api";
import { UseFieldModel } from "./useField";


interface UseFormParams {
    fields: {
        [key: string]: UseFieldModel
    },
    watchAfterSubmit?: boolean
}
interface UseFormErrors {
    [key: string]: Ref<string[]>
}
export default function useForm({ fields, watchAfterSubmit }: UseFormParams) {
    let plainValues = {}
    let plainErrors = {}
    const isValid = ref(false)
    const isSubmit = ref(false)
    const isSubmiting = ref(false)
    Object.keys(fields).map(key => {
        const field: UseFieldModel = fields[key]
        plainValues[key] = field.value
        plainErrors[key] = field.errors
    })
    const values = reactive<{ [key: string]: any }>(plainValues)
    const errors: any = reactive<{ [key: string]: Array<string> }>(plainErrors)

    const validate = async () => {
        const resolvers = Object.keys(fields).map(key => {
            const field: UseFieldModel = fields[key]
            return field.validate()
        })
        const boolArray = await Promise.all(resolvers)
        return !boolArray.includes(false)
    }
    const handleSubmit = (cb: Function) => {
        return async (...params: any) => {
            isSubmit.value = true
            await validate()
            if (!isValid.value) return
            isSubmiting.value = true
            await cb(...params)
            isSubmiting.value = false
        }
    }

    const serialize = () => {
        const keys = Object.keys(values)
        const toSend: any = {}
        keys.map(key => {
            toSend[key] = values[key]
        })
        return toSend
    }

    watch(errors, (newErrors: any) => {
        const boolArray = Object.keys(newErrors).map(key => {
            const currentErrors = newErrors[key]
            return currentErrors.length < 1
        })
        isValid.value = !boolArray.includes(false)
    })
    watch(isSubmit, () => {
        if (isSubmit && watchAfterSubmit) {
            watch(values, newValues => {
                validate()
            })
        }
    })


    return { values, errors, isValid, handleSubmit, validate, serialize }
}
