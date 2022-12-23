import { useNavigate } from 'react-router-dom'

function Navbar() {
	const navigate = useNavigate()

	return (
		<nav>
			<div className='icon' onClick={() => navigate('/ticket')}>
				Ticket
			</div>
			<div className='icon' onClick={() => navigate('/')}>
				Home
			</div>
		</nav>
	)
}

export default Navbar
