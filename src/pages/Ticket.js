import React, { useState } from 'react'

function Ticket() {
	const [formData, setFormData] = useState({
		status: 'not started',
		timestamp: new Date().toISOString(),
		assignee: 'Please Assign task',
	})

	const handleChange = (e) => {
		const value = e.target.value
		const name = e.target.name

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<form>
			<label htmlFor='priority'>Priority</label>
			<section className='multiple-input-container'>
				<input
					type='radio'
					id='priority-1'
					value={1}
					checked={FormData.priority === 1}
					onChange={handleChange}
				/>
				<label htmlFor='priority-1'>1</label>
				<input
					type='radio'
					id='priority-2'
					value={2}
					checked={FormData.priority === 2}
					onChange={handleChange}
				/>
				<label htmlFor='priority-2'>2</label>
				<input
					type='radio'
					id='priority-3'
					value={3}
					checked={FormData.priority === 3}
					onChange={handleChange}
				/>
				<label htmlFor='priority-3'>3</label>
				<input
					type='radio'
					id='priority-4'
					value={4}
					checked={FormData.priority === 4}
					onChange={handleChange}
				/>
				<label htmlFor='priority-4'>4</label>
				<input
					type='radio'
					id='priority-5'
					value={5}
					checked={FormData.priority === 5}
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
				></textarea>
			</section>
			<input type='button' value='submit' />
		</form>
	)
}

export default Ticket
