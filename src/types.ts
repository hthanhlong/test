import { Dialect } from 'sequelize'

export interface ENV_CONGIF {
    PORT: number
    DATABASE_USERNAME: string
    DATABASE_PASSWORD: string
    DATABASE_HOST: string
    DATABASE_NAME: string
    DATABASE_DIALECT: Dialect
}
