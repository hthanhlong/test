import { config } from 'dotenv'
config()

export const ENV_CONGIF = {
    PORT: process.env.PORT || 3000,
}
