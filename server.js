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
app.get('/tickets/:id', async (req, res) => {
	const id = parseInt(req.params.id)

	pool.query(
		'SELECT * FROM ticket_item WHERE ticket_id = $1',
		[id],
		(err, results) => {
			if (err) {
				throw err
			}
			res.status(200).json(results.rows)
		}
	)
})

// Create one ticket
app.post('/tickets', async (req, res) => {
	try {
		const { assignee, priority, status, description } = req.body.formData

		const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'UTC' })

		const newTicket = await pool.query(
			'INSERT INTO ticket_item (assignee, timestamp, priority, status, description) VALUES($1, $2, $3, $4, $5)',
			[assignee, timestamp, priority, status, description]
		)
		res.status(200).json({ msg: 'new ticket created' })
	} catch (error) {
		console.error(error)
	}
})
// Update ticket
app.put('/tickets/:id', async (req, res) => {
	const id = parseInt(req.params.id)
	const { assignee, priority, status, description } = req.body.data

	pool.query(
		'UPDATE ticket_item SET assignee = $1, priority = $2, status = $3, description = $4 WHERE ticket_id = $5',
		[assignee, priority, status, description, id],
		(error, results) => {
			if (error) {
				throw error
			}

			res.status(200).json({ msg: `Ticket updated with ID: ${id}` })
		}
	)
})

// Delete ticket
app.delete('/tickets/:id', async (req, res) => {
	const id = parseInt(req.params.id)

	pool.query(
		'DELETE FROM ticket_item WHERE ticket_id = $1',
		[id],
		(error, results) => {
			if (error) {
				throw error
			}
			res.status(200).json({ msg: `Ticket deleted with ID ${id}` })
		}
	)
})

app.listen(5001, () => console.log('Sever started on port 5001'))
