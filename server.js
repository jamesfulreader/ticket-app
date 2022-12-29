const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// App middleware
app.use(cors())
app.use(express.json())

// ROUTES
// Get all tickets
app.get('/tickets', async (req, res) => {
	pool.query('SELECT * FROM ticket_item', (err, results) => {
		if (err) {
			throw err
		}
		console.log(results.rows)
	})
})
// Get one ticket
app.get('/tickets/:id', async (req, res) => {})
// Create one ticket
app.post('/tickets', async (req, res) => {
	try {
		console.log(req.body)
	} catch (error) {
		console.error(error)
	}
})
// Update ticket
app.put('/tickets/:id', async (req, res) => {})

// Delete ticket
app.delete('/ticket/:id', async (req, res) => {})

app.listen(5001, () => console.log('Sever started on port 5001'))
