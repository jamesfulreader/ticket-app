import PriorityDisplay from './PriorityDisplay'
import Assignee from './Assignee'
import ResolveTicket from './ResolveTicket'
import StatusDisplay from './StatusDisplay'
import TicketDesc from './TicketDesc'
import EditTicket from './EditTicket'
import DeleteTicket from './DeleteTicket'

function TicketCard({ ticket }) {
	return (
		<div className='ticket-card'>
			<h2>TicketCard</h2>
			<PriorityDisplay priority={ticket.priority} />
			<StatusDisplay status={ticket.status} />
			<Assignee assignee={ticket.assignee} />
			<TicketDesc description={ticket.description} />
			<ResolveTicket id={ticket.ticket_id} />
			<EditTicket id={ticket.ticket_id} />
			<DeleteTicket id={ticket.ticket_id} />
		</div>
	)
}

export default TicketCard
