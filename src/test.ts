import { object, string, number } from 'yup'

const myUserSchema = object({
    name: string().required(),
    password: number().required(),
})

const validateFunc = async () => {
    try {
        const data: DemoData = {
            name: 'hello',
            password: 'password',
        }
        const newData = await myUserSchema.validate(data, { strict: true })
        console.log('object :>> ', newData)
    } catch (error: any) {
        console.log('err.errors;  :>> ', error.errors)
    }
}

validateFunc()
