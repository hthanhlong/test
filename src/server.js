const express = require('express')
const ENV_CONGIF = require('./constant')
// init app
const app = express()

const PORT = ENV_CONGIF.PORT

app.listen(PORT, () => {
    console.log('server already running')
})
