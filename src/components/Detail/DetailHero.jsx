import '../../styles/Detail/DetailHero.css';
import '../../styles/Style.css';
import Porsche from '../../assets/Detail/Porsche.png';
import Mercedes from '../../assets/Detail/Mercedes.png';

function DetailHero({ car }) {
	if (!car) return null;

	return (
		<section className='DetailHero-grid'>
			<div className='DetailHero-main'>
				<img src={car.imagem} alt={car.modelo} className='DetailHero-main-img' />
				<div className='DetailHero-title-container'>
					<div className='DetailHero-title'>
						<p className='DetailHero-marca'>{car.marca}</p>
						<div className='DetailHero-modelo-container'>
							<p className='DetailHero-modelo'>{car.modelo}</p>
						</div>
					</div>
					<div className='DetailHero-tags-container'>
						<span className='DetailHero-tags'>MODEL YEAR: {car.ano}</span>
						<span className='DetailHero-tags'>{car.combustivel}</span>
					</div>
				</div>
			</div>

			<div className='DetailHero-side-container'>
				<div className='DetailHero-side-wrapper'>
					<img src={Porsche} alt='Exterior' className='DetailHero-side-img' />
				</div>
				<div className='DetailHero-side-wrapper'>
					<img src={Mercedes} alt='Interior' className='DetailHero-side-img' />
				</div>
			</div>
		</section>
	);
}

export default DetailHero;
