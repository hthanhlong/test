const express = require('express')

const app = express()

const a = '1'
console.log(a)

app.listen(3000, () => {
    console.log('server already running')
})
