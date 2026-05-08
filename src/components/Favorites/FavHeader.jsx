import '../../styles/Favorites/FavHeader.css';

import { useFavorites } from '../../context/FavoritesContext';

function FavHeader() {
	const { favorites } = useFavorites();

	return (
		<section className='CatalogHeader-section'>
			<div className='CatalogHeader-container'>
				<div className='CatalogHeader-subtitle-container'>
					<p className='CatalogHeader-subtitle'>your collection</p>
				</div>
				<div className='CatalogHeader-title-container'>
					<p className='CatalogHeader-title'>Favorites</p>
				</div>
			</div>

			<div className='CatalogHeader-fav-container'>
				<p className='CatalogHeader-fav-number'> {favorites.length} Vehicles Saved</p>
			</div>
		</section>
	);
}

export default FavHeader;
