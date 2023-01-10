import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function DeleteTicket({ id }) {
	const handleClick = async () => {
		const res = await axios.delete(`http://localhost:5001/tickets/${id}`)
		const success = res.status == 200
		if (success) window.location.reload()
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
