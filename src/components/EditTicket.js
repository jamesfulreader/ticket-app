import { useNavigate } from 'react-router-dom'

const EditTicket = ({ id }) => {
	const navigate = useNavigate()

	return (
		<strong>
			<input
				className='edit-btn'
				type='button'
				value='Edit'
				onClick={() => navigate(`/ticket/${id}`, { id: id })}
			/>
		</strong>
	)
}

export default EditTicket
