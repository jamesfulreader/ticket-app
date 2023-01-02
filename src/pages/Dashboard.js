import { useEffect, useState } from 'react'
import TicketCard from '../components/TicketCard'
import axios from 'axios'

function Dashboard() {
	const [tickets, setTickets] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get('http://localhost:5001/tickets')
			const data = await res.data
			setTickets(data)
		}
		fetchData()
	}, [])

	return (
		<div>
			<h4>Dashboard</h4>
			{tickets ? (
				tickets.map((item, _index) => <TicketCard key={_index} ticket={item} />)
			) : (
				<h4>No Items</h4>
			)}
		</div>
	)
}

export default Dashboard
