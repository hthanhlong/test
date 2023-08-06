import { config } from 'dotenv'
import { ENV_CONGIF } from './types'

config()

const ENV_CONGIF: ENV_CONGIF = {
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    DATABASE_USERNAME: 'postgres',
    DATABASE_PASSWORD: '123456789',
    DATABASE_HOST: 'localhost',
    DATABASE_NAME: 'learn_test',
    DATABASE_DIALECT: 'postgres',
}

export default ENV_CONGIF
