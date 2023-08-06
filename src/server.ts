import express, { Application } from 'express'
import { ENV_CONGIF } from './constant'
import { initDatabase } from './database'

const PORT = ENV_CONGIF.PORT

const main = async () => {
    await initDatabase()
    const app: Application = express()

    app.listen(PORT, () => {
        console.log(`server already running --> ${PORT}`)
    })
}

main()
