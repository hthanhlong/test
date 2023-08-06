import { config } from 'dotenv'
config()

export const ENV_CONGIF: Record<string, number> = {
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
}
