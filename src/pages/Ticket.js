import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Ticket({ editMode }) {
	const [formData, setFormData] = useState({
		priority: 0,
		status: 'not started',
		timestamp: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
		assignee: 'Please Assign task',
		description: '',
	})

	const navigate = useNavigate()
	let { id } = useParams()

	const handleChange = (e) => {
		const value = e.target.value
		const name = e.target.name

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (editMode && id) {
			const res = await axios.put(`http://localhost:5001/tickets/${id}`, {
				data: formData,
			})
			const success = res.status === 200
			if (success) {
				navigate('/')
			}
		}
	}

	const fetchData = async () => {
		const res = await axios.get(`http://localhost:5001/tickets/${id}`)
		setFormData(res.data[0])
	}

	useEffect(() => {
		if (editMode) {
			fetchData()
		}
	}, [])

	return (
		<form>
			<h1>{editMode ? 'Update Your Ticket' : 'Create a Ticket'}</h1>
			<label htmlFor='priority'>Priority</label>
			<section className='multiple-input-container'>
				<input
					type='radio'
					id='priority-1'
					value={1}
					checked={formData.priority === 1}
					onChange={handleChange}
				/>
				<label htmlFor='priority-1'>1</label>
				<input
					type='radio'
					id='priority-2'
					value={2}
					checked={formData.priority === 2}
					onChange={handleChange}
				/>
				<label htmlFor='priority-2'>2</label>
				<input
					type='radio'
					id='priority-3'
					value={3}
					checked={formData.priority === 3}
					onChange={handleChange}
				/>
				<label htmlFor='priority-3'>3</label>
				<input
					type='radio'
					id='priority-4'
					value={4}
					checked={formData.priority === 4}
					onChange={handleChange}
				/>
				<label htmlFor='priority-4'>4</label>
				<input
					type='radio'
					id='priority-5'
					value={5}
					checked={formData.priority === 5}
					onChange={handleChange}
				/>
				<label htmlFor='priority-5'>5</label>
			</section>
			<section>
				<label htmlFor='Status'>Status</label>
				<select name='status' id='status-select'>
					<option
						value='on started'
						selected={formData.status === 'not started'}
					>
						Not Started
					</option>
					<option
						value='in progress'
						selected={formData.status === 'in progress'}
					>
						In Progress
					</option>
					<option value='on hold' selected={formData.status === 'on hold'}>
						On Hold
					</option>
					<option value='complete' selected={formData.status === 'complete'}>
						Complete
					</option>
				</select>
			</section>
			<section>
				<label htmlFor='assignee'>Assignee</label>
				<select name='assignee' id='assignee-select'>
					<option value='Jon Doe' selected={formData.assignee === 'Jon Doe'}>
						Jon Doe
					</option>
					<option value='Jane Doe' selected={formData.assignee === 'Jane Doe'}>
						Jane Doe
					</option>
					<option
						value='Mark Jones'
						selected={formData.assignee === 'Mark Jones'}
					>
						Mark Jones
					</option>
					<option
						value='Jackie Grayson'
						selected={formData.assignee === 'Jackie Grayson'}
					>
						Jackie Grayson
					</option>
					<option
						value='Mary Mars'
						selected={formData.assignee === 'Mary Mars'}
					>
						Mary Mars
					</option>
					<option
						value='George Gustov'
						selected={formData.assignee === 'George Gustov'}
					>
						George Gustov
					</option>
					<option
						value='Victoria Martinez'
						selected={formData.assignee === 'Victoria Martinez'}
					>
						Victoria Martinez
					</option>
				</select>
			</section>
			<section>
				<label htmlFor='ticket-description'>Ticket Description</label>
				<textarea
					name='ticket-description'
					id='ticket-description'
					cols='50'
					rows='20'
					value={formData.description}
				></textarea>
			</section>
			<input type='button' value='submit' />
		</form>
	)
}

export default Ticket
