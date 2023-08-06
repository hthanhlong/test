import express from 'express'
import { ENV_CONGIF } from './constant'

const app = express()

const PORT = ENV_CONGIF.PORT

app.listen(PORT, () => {
    console.log(`server already running --> ${PORT}`)
})
