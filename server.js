const express = require('express')
const app = express()
const cors = require('cors')
const connectDb = require('./db')

// App middleware
app.use(cors())
app.use(express.json())

// ROUTES
// Get all tickets

// Get one ticket

// Create one ticket

// Update ticket

// Delete ticket

app.listen(5001, () => console.log('Sever started on port 5001'))
