import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Ticket({ editMode, resolved }) {
	const [formData, setFormData] = useState({
		status: 'not started',
		assignee: 'Jon Doe',
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

		if (editMode) {
			const res = await axios.put(`http://localhost:5001/tickets/${id}`, {
				data: formData,
			})
			const success = res.status === 200
			if (success) {
				navigate('/')
			}
		}

		if (!editMode) {
			const res = await axios.post(`http://localhost:5001/tickets`, {
				formData,
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
		<div>
			<form>
				<h1>{editMode ? 'Update Your Ticket' : 'Create a Ticket'}</h1>
				<label htmlFor='priority'>Priority</label>
				<section>
					<input
						name='priority'
						type='radio'
						id='priority-1'
						onChange={handleChange}
						defaultValue={1}
						checked={formData.priority == 1}
					/>
					<label htmlFor='priority-1'>1</label>
					<input
						name='priority'
						type='radio'
						id='priority-2'
						onChange={handleChange}
						defaultValue={2}
						checked={formData.priority == 2}
					/>
					<label htmlFor='priority-2'>2</label>
					<input
						name='priority'
						type='radio'
						id='priority-3'
						onChange={handleChange}
						defaultValue={3}
						checked={formData.priority == 3}
					/>
					<label htmlFor='priority-3'>3</label>
					<input
						name='priority'
						type='radio'
						id='priority-4'
						onChange={handleChange}
						defaultValue={4}
						checked={formData.priority == 4}
					/>
					<label htmlFor='priority-4'>4</label>
					<input
						name='priority'
						type='radio'
						id='priority-5'
						onChange={handleChange}
						defaultValue={5}
						checked={formData.priority == 5}
					/>
					<label htmlFor='priority-5'>5</label>
				</section>
				<label>Status</label>
				<section>
					<select name='status' id='status-select' onChange={handleChange}>
						<option
							name='status'
							defaultValue='on started'
							selected={formData.status == 'not started'}
						>
							Not Started
						</option>
						<option
							name='status'
							defaultValue='in progress'
							selected={formData.status == 'in progress'}
						>
							In Progress
						</option>
						<option
							name='status'
							defaultValue='on hold'
							selected={formData.status == 'on hold'}
						>
							On Hold
						</option>
						<option
							name='status'
							defaultValue='complete'
							selected={formData.status == 'complete'}
						>
							Complete
						</option>
					</select>
				</section>
				<label htmlFor='assignee'>Assignee</label>
				<section>
					<select name='assignee' id='assignee-select' onChange={handleChange}>
						<option
							name='assignee'
							defaultValue='Jon Doe'
							selected={formData.assignee == 'Jon Doe'}
						>
							Jon Doe
						</option>
						<option
							name='assignee'
							defaultValue='Jane Doe'
							selected={formData.assignee == 'Jane Doe'}
						>
							Jane Doe
						</option>
						<option
							name='assignee'
							defaultValue='Mark Jones'
							selected={formData.assignee == 'Mark Jones'}
						>
							Mark Jones
						</option>
						<option
							name='assignee'
							defaultValue='Jackie Grayson'
							selected={formData.assignee == 'Jackie Grayson'}
						>
							Jackie Grayson
						</option>
						<option
							name='assignee'
							defaultValue='Mary Mars'
							selected={formData.assignee == 'Mary Mars'}
						>
							Mary Mars
						</option>
						<option
							name='assignee'
							defaultValue='George Gustov'
							selected={formData.assignee == 'George Gustov'}
						>
							George Gustov
						</option>
						<option
							name='assignee'
							defaultValue='Victoria Martinez'
							selected={formData.assignee == 'Victoria Martinez'}
						>
							Victoria Martinez
						</option>
					</select>
				</section>
				<label htmlFor='ticket-description'>Ticket Description</label>
				<section>
					<textarea
						name='description'
						id='ticket-description'
						cols='50'
						rows='20'
						defaultValue={formData.description}
						onChange={handleChange}
					/>
				</section>
			</form>
			<input
				id='submit-btn'
				type='button'
				defaultValue='submit'
				onClick={handleSubmit}
			/>
		</div>
	)
}

export default Ticket
