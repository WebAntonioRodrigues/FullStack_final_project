import { useFavorites } from '../context/FavoritesContext';
import SmallCard from '../components/Home/SmallCard';

function Favorites() {
	const { favorites } = useFavorites();

	if (favorites.length === 0) {
		return (
			<div>
				<p>Não tens carros favoritos.</p>
			</div>
		);
	}

	return (
		<div>
			{favorites.map(car => (
				<SmallCard key={car.id} car={car} />
			))}
		</div>
	);
}

export default Favorites;
