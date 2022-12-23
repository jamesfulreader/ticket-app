import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar />
			</header>
			<div className='ticket-container'>
				<Dashboard />
			</div>
		</div>
	)
}

export default App
