import DirectoryItem from '../directory-item/directory-item.component'
import { DirectoryContainer } from './directory.styles'

const categories = [
	{
		id: 1,
		title: 'boots',
		imageUrl: 'https://i.ibb.co/fQ9NFH9/Nike-boots-2.jpg',
		route: 'shop/boots',
	},
	{
		id: 2,
		title: 'balls',
		imageUrl: 'https://i.ibb.co/Y7YhCZt/2022-world-cup-adidas-al-rihla-official-match-ball.png',
		route: 'shop/balls',
	},
	{
		id: 3,
		title: 'jerseys',
		imageUrl: 'https://i.ibb.co/nP576ZG/Lewy.webp',
		route: 'shop/jerseys',
	},
	{
		id: 4,
		title: 'kits',
		imageUrl: 'https://i.ibb.co/bLQG6cQ/RealM.jpg',
		route: 'shop/kits',
	},
	{
		id: 5,
		title: 'accessories',
		imageUrl: 'https://i.ytimg.com/vi/wXwfIjrjHpo/hqdefault.jpg',
		route: 'shop/accessories',
	},
]

const Directory = () => {
	return (
		<DirectoryContainer>
			{categories.map(category => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	)
}

export default Directory
