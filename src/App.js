import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Ticket from './pages/Ticket'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				{/* <header className='App-header'></header> */}
				<Navbar />
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/ticket' element={<Ticket />} />
					<Route path='/ticket/:id' element={<Ticket editMode={true} />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
