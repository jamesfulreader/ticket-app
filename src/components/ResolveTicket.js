import { useNavigate } from 'react-router-dom'

function ResolveTicket({ id }) {
	const navigate = useNavigate()

	const handleClick = () => {
		console.log('resolve clicked')
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
