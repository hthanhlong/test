import express, { Application } from 'express'
import { ENV_CONGIF } from './constant'

const app: Application = express()

const PORT = ENV_CONGIF.PORT

app.listen(PORT, () => {
    console.log(`server already running --> ${PORT}`)
})
