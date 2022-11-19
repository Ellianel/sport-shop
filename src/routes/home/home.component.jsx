import { Outlet } from 'react-router-dom'

import Directory from '../../components/directory/directory.component'

const Home = () => {
	const categories = [
		{
			id: 1,
			title: 'boots',
			imageUrl: 'https://i.ibb.co/fQ9NFH9/Nike-boots-2.jpg',
		},
		{
			id: 2,
			title: 'football balls',
			imageUrl: 'https://i.ibb.co/Y7YhCZt/2022-world-cup-adidas-al-rihla-official-match-ball.png',
		},
		{
			id: 3,
			title: 'jerseys',
			imageUrl: 'https://i.ibb.co/nP576ZG/Lewy.webp',
		},
		{
			id: 4,
			title: 'kits',
			imageUrl: 'https://i.ibb.co/bLQG6cQ/RealM.jpg',
		},
		{
			id: 5,
			title: 'accesories',
			imageUrl: 'https://i.ytimg.com/vi/wXwfIjrjHpo/hqdefault.jpg',
		},
	]

	return (
		<div>
			<Directory categories={categories} />
			<Outlet />
		</div>
	)
}

export default Home
