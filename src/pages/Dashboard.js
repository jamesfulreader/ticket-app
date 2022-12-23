import TicketCard from '../components/TicketCard'

function Dashboard() {
	const data = [
		{
			assignee: 'Jon Doe',
			priority: 1,
			status: 'not started',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, provident velit labore officiis modi sed ab sit voluptas, optio quisquam expedita deleniti quam. Esse, delectus!',
		},
		{
			assignee: 'Jane Doe',
			priority: 2,
			status: 'in progress',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, provident velit labore officiis modi sed ab sit voluptas, optio quisquam expedita deleniti quam. Esse, delectus!',
		},
		{
			assignee: 'Mark Jones',
			priority: 3,
			status: 'completed',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, provident velit labore officiis modi sed ab sit voluptas, optio quisquam expedita deleniti quam. Esse, delectus!',
		},
		{
			assignee: 'Jackie Grayson',
			priority: 4,
			status: 'on hold',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, provident velit labore officiis modi sed ab sit voluptas, optio quisquam expedita deleniti quam. Esse, delectus!',
		},
		{
			assignee: 'Mary Mars',
			priority: 5,
			status: 'in progress',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, provident velit labore officiis modi sed ab sit voluptas, optio quisquam expedita deleniti quam. Esse, delectus!',
		},
		{
			assignee: 'George Gustov',
			priority: 5,
			status: 'in progress',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, provident velit labore officiis modi sed ab sit voluptas, optio quisquam expedita deleniti quam. Esse, delectus!',
		},
		{
			assignee: 'Victoria Martinez',
			priority: 3,
			status: 'in progress',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, provident velit labore officiis modi sed ab sit voluptas, optio quisquam expedita deleniti quam. Esse, delectus!',
		},
	]

	return (
		<div>
			<h4>Dashboard</h4>
			{data ? (
				data.map((item, _index) => <TicketCard key={_index} ticket={item} />)
			) : (
				<h4>No Items</h4>
			)}
		</div>
	)
}

export default Dashboard
