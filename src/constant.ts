import { config } from 'dotenv'
import { Dialect } from 'sequelize'
config()

type ENV_CONGIF = {
    PORT: number
    DATABASE_USERNAME: string
    DATABASE_PASSWORD: string
    DATABASE_HOST: string
    DATABASE_NAME: string
    DATABASE_DIALECT: Dialect
}

export const ENV_CONGIF: ENV_CONGIF = {
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    DATABASE_USERNAME: 'postgres',
    DATABASE_PASSWORD: '123456789',
    DATABASE_HOST: 'localhost',
    DATABASE_NAME: 'learn_test',
    DATABASE_DIALECT: 'postgres',
}
