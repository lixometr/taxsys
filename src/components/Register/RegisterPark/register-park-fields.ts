import useField from "@/compositions/validators/useField";
import * as yup from "yup"
import "yup-phone"
const name = useField("", [yup.string().required().test('', 'Можно вводить только русские буквы', (value) => {
    return /^[а-яА-Я]*$/i.test(value)
})]);
const middleName = useField("", [yup.string().required().test('', 'Можно вводить только русские буквы', (value) => {
    return /^[а-яА-Я]*$/i.test(value)
})]);
const lastName = useField("", [yup.string().required().test('', 'Можно вводить только русские буквы', (value) => {
    return /^[а-яА-Я]*$/i.test(value)
})]);
const birthday = useField("", [yup.string().required()]);
const passport = useField("", [yup.string().required().length(10)]);
const phone = useField("", [yup.number().typeError("Введите корректный номер телефона"),]);
const city = useField(null, [yup.number().required()]);
export const fields = {
    name,
    middleName,
    lastName,
    birthday,
    passport,
    phone,
    city
}