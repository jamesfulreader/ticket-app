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
	pool.query(
		'SELECT * FROM ticket_item ORDER BY ticket_id ASC',
		(err, results) => {
			if (err) {
				throw err
			}
			res.status(200).json(results.rows)
		}
	)
})
// Get one ticket
app.get('/tickets/:id', async (req, res) => {})

// Create one ticket
app.post('/tickets', async (req, res) => {
	try {
		const { assignee, priority, status, description } = req.body
		// 1999-01-08 04:05:06 -8:00
		const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'UTC' })

		const newTicket = await pool.query(
			'INSERT INTO ticket_item (assignee, timestamp, priority, status, description) VALUES($1, $2, $3, $4, $5)',
			[assignee, timestamp, priority, status, description]
		)
		res.json(newTicket)
	} catch (error) {
		console.error(error)
	}
})
// Update ticket
app.put('/tickets/:id', async (req, res) => {})

// Delete ticket
app.delete('/ticket/:id', async (req, res) => {})

app.listen(5001, () => console.log('Sever started on port 5001'))
