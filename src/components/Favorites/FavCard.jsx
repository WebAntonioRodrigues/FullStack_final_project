import { useFavorites } from '../../context/FavoritesContext';
import { Link } from 'react-router-dom';
import SmallCard from '../../components/Home/SmallCard';
import '../../styles/Favorites/FavCard.css';

function FavCard() {
	const { favorites } = useFavorites();

	if (favorites.length === 0) {
		return (
			<div>
				<p>Não tens carros favoritos.</p>
			</div>
		);
	}

	return (
		<div className='FavCard-section'>
			{favorites.map(car => (
				<Link key={car.id} to={`/cars/${car.id}`} style={{ textDecoration: 'none' }}>
					<SmallCard car={car} />
				</Link>
			))}
		</div>
	);
}

export default FavCard;
