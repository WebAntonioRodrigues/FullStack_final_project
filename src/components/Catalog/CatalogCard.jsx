import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import '../../styles/Catalog/CatalogCard.css';

function CatalogCard({ car }) {
	const { addFavorite, removeFavorite, isFavorite } = useFavorites();

	if (!car) return null;

	const favorito = isFavorite(car.id);

	const handleFavorite = e => {
		e.preventDefault();
		if (favorito) {
			removeFavorite(car.id);
		} else {
			addFavorite(car);
		}
	};

	return (
		<Link className='CatalogCard-link' to={`/Detail/${car.id}`}>
			<div className='CatalogCard-container'>
				<div className='CatalogCard-img-wrapper'>
					<img className='CatalogCard-img' src={car.imagem} alt={car.modelo} />
					<button className='CatalogCard-fav-btn' onClick={handleFavorite}>
						{favorito ? '♥' : '♡'}
					</button>
				</div>

                
				<div className='CatalogCard-info'>
					<div className='CatalogCard-info-left'>
						<h3 className='CatalogCard-name'>
							{car.marca} {car.modelo}
						</h3>
						<p className='CatalogCard-data'>
							{car.ano} • {car.km} KM
						</p>
					</div>
					<div className='CatalogCard-info-right'>
						<p className='CatalogCard-price'>€ {car.preco}</p>
						<p className='CatalogCard-txt'>Excl. Tax</p>
					</div>
				</div>

                
				<div className='CatalogCard-specs-container'>
					<div className='CatalogCard-specs'>
						<p className='CatalogCard-specs-txt'>Engine</p>
						<p className='CatalogCard-specs-value'>{car.combustivel}</p>
					</div>
					<div className='CatalogCard-specs'>
						<p className='CatalogCard-specs-txt'>Power</p>
						<p className='CatalogCard-specs-value'>{car.potencia} CV</p>
					</div>
					<div className='CatalogCard-specs'>
						<p className='CatalogCard-specs-txt'>Gear box</p>
						<p className='CatalogCard-specs-value'>{car.caixa}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default CatalogCard;
