import { useNavigate } from 'react-router-dom'

function ResolveTicket({ id }) {
	const navigate = useNavigate()

	const handleClick = () => {
		const resolved = true
		navigate(`/ticket/${id}`, { id: id, resolved: resolved })
	}
	return (
		<strong>
			<input
				className='resolve-btn'
				type='button'
				value='Resolve'
				onClick={() => handleClick}
			/>
		</strong>
	)
}

export default ResolveTicket
