import { Sequelize } from 'sequelize'
import { ENV_CONGIF } from '../constant'

const sequelize = new Sequelize(
    ENV_CONGIF.DATABASE_NAME,
    ENV_CONGIF.DATABASE_USERNAME,
    ENV_CONGIF.DATABASE_PASSWORD,
    {
        host: ENV_CONGIF.DATABASE_HOST,
        dialect: ENV_CONGIF.DATABASE_DIALECT,
    }
)

const initDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

export { initDatabase, sequelize }
