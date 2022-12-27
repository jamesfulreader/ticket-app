const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.listen(5001, () => console.log('Sever started on port 5001'))
