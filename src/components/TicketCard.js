import React from 'react'
import PriorityDisplay from './PriorityDisplay'
import Assignee from './Assignee'
import ResolveTicket from './ResolveTicket'
import StatusDisplay from './StatusDisplay'
import TicketDesc from './TicketDesc'

function TicketCard() {
	return (
		<div>
			<h2>TicketCard</h2>
			<PriorityDisplay />
			<StatusDisplay />
			<Assignee />
			<TicketDesc />
			<ResolveTicket />
		</div>
	)
}

export default TicketCard
