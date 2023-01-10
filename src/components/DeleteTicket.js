import axios from 'axios'

function DeleteTicket({ id }) {
	const handleClick = async () => {
		const res = await axios.delete(`http://localhost:5001/tickets/${id}`)
	}

	return (
		<strong>
			<input
				className='delete-btn'
				type='button'
				value='Delete'
				onClick={handleClick}
			/>
		</strong>
	)
}

export default DeleteTicket
