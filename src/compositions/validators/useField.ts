import { Ref, ref, watch } from "@vue/composition-api";
import { BaseSchema, ValidationError } from "yup"
interface UseFieldOptions {
    onValidate?: (value: any) => any
    watchValue?: boolean
}
export interface UseFieldModel {
    value: Ref<any>
    errors: Ref<Array<string>>
    isValid: Ref<boolean>
    validate: (...args: any) => any
}
const defaultOptions: UseFieldOptions = {
    onValidate: value => value,
    watchValue: false
}

type UseFieldValidators = Array<Function | BaseSchema>
export default function useField(defaultValue: string | boolean | number | object = '', validators: UseFieldValidators, options?: UseFieldOptions): UseFieldModel {
    options = Object.assign({}, defaultOptions, options)
    const value = ref(defaultValue)
    const errors: Ref<Array<string>> = ref([])
    const validate = async () => {
        const resolvers = validators.map(async validator => {
            try {
                if (validator instanceof BaseSchema) {
                    await validator.validate(value.value)
                    return true
                } else {
                    return await validator(value.value)
                }
            } catch (err) {
                if (err instanceof ValidationError) {
                    return err.errors
                }
                return err
            }
        })
        let ers = await Promise.all(resolvers)
        ers = ers.reduce((arr, item) => {
            if (Array.isArray(item)) {
                return arr.concat(item)
            }
            arr.push(item)
            return arr
        }, [])
        ers = ers.filter(error => error !== true)
        errors.value = ers
        return errors.value.length < 1
    }
    if (options.watchValue) {
        watch(value, async val => {
            await validate()
            options.onValidate(value)
        })
    }
    const isValid = ref(true)
    watch(errors, newErrors => {
        isValid.value = errors.value.length > 0
    })



    return { value, errors, isValid, validate }
}