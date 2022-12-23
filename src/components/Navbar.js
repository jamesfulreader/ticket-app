import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import AddIcon from '@mui/icons-material/Add'

function Navbar() {
	const navigate = useNavigate()

	return (
		<nav>
			<div className='icon' onClick={() => navigate('/ticket')}>
				<AddIcon />
			</div>
			<div className='icon' onClick={() => navigate('/')}>
				<HomeIcon />
			</div>
		</nav>
	)
}

export default Navbar
