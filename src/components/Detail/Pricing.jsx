import { Link } from 'react-router-dom';
import Button from '../Comun/Button';
import '../../styles/Detail/Pricing.css';
import '../../styles/Comun/Buttons.css';

function pricing({ car }) {
	if (!car) return null;

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
				<div>
					<Link className='link' to='/Detail'>
						<Button className='btn-pricing-secondary' text='♡ ADD TO FAVORITES' textClassName='text-btn-pricing-secondary'></Button>
					</Link>
				</div>
				<div>
					<Link className='link' to='/Catalog'>
						<Button className='btn-pricing-primary' text='RESERVE NOW' textClassName='text-btn-pricing-primary'></Button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default pricing;
