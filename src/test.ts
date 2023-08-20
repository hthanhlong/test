import { object, string, number } from 'yup'

const myUserSchema = object({
    name: string().required(),
    password: number().required(),
})

const validateFunc = async () => {
    try {
        const data = {
            name: 'hello',
            password: 'password',
        }
        const newData = await myUserSchema.validate(data, { strict: true })
        console.log('object :>> ', newData)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log('err.errors;  :>> ', error.errors)
    }
}

validateFunc()
