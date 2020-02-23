const express = require('express')
const port = 3000
const userRouter = require('./routes/user')
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})