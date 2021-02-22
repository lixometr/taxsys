import useApi, { UseApiOptions } from "@/compositions/useApi";
import useMoment from "@/compositions/useMoments";
interface CheckDriverProps {
    surname: string
    name: string
    lastname: string
    dateOfBirth: Date
    numberOfPassport: string | number
    driverLicense: string
    dateDriverLicense: Date
}
interface CheckDriverResponse {
    status: string,
    message: string
}
export const useApiDriverCheck = (opts?: UseApiOptions) => useApi<CheckDriverProps, CheckDriverResponse>(
    ({ surname, name, lastname, dateOfBirth, numberOfPassport, driverLicense, dateDriverLicense }) => ({
        method: "POST",
        url: "/driver/check",
        data: {
            surname,
            name,
            lastname,
            DateOfBirth: useMoment(dateOfBirth).format('YYYY-MM-DD'),
            NumberOfPassport: numberOfPassport,
            SerialDriverLicense: driverLicense,
            DateDriverLicense: useMoment(dateDriverLicense).format('YYYY-MM-DD')
        }
    }), { ...opts })