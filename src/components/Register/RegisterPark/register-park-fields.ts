import useField from "@/compositions/validators/useField";
import * as yup from "yup"
import "yup-phone"
const name = useField("", [yup.string().required()]);
const middleName = useField("", [yup.string().required()]);
const lastName = useField("", [yup.string().required()]);
const birthday = useField("", [yup.string().required()]);
const passport = useField("", [yup.string().required()]);
const phone = useField("", [yup.string().phone("7", true, "Введите корректный номер телефона"),]);
const city = useField("", [yup.string().required()]);
export const fields = {
    name,
    middleName,
    lastName,
    birthday,
    passport,
    phone,
    city
}