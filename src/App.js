import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Ticket from './pages/Ticket'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<header className='App-header'>
					<Navbar />
				</header>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/ticket' element={<Ticket />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
