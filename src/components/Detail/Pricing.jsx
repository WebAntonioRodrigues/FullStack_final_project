import { Link } from 'react-router-dom';
import Button from '../Comun/Button';
import { useFavorites } from '../../context/FavoritesContext';
import '../../styles/Detail/Pricing.css';
import '../../styles/Comun/Buttons.css';

function Pricing({ car }) {
	const { addFavorite, removeFavorite, isFavorite } = useFavorites();

	if (!car) return null;
	
	const favorito = isFavorite(car.id);

	const handleFavorite = () => {
		if (favorito) {
			removeFavorite(car.id);
		} else {
			addFavorite(car);
		}
	};

	return (
		<section className='Pricing-section-container'>
			<div className='Pricing-container'>
				<div className='Pricing-txt-container'>
					<p className='Pricing-txt'>available from</p>
				</div>
				<div className='Price-container'>
					<p className='Price'>€ {car.preco}</p>
				</div>
			</div>

			<div className='Pricing-btn-container'>
				<div onClick={handleFavorite}>
					<Button className='btn-pricing-secondary' text={favorito ? '♥ REMOVE FAVORITE' : '♡ ADD TO FAVORITES'} textClassName='text-btn-pricing-secondary' />
				</div>
				<div>
					<Link className='link' to='/Catalog'>
						<Button className='btn-pricing-primary' text='RESERVE NOW' textClassName='text-btn-pricing-primary' />
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Pricing;
