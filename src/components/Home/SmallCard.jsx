import "../../styles/Home/SmallCard.css"

function SmallCard({ car }) {
	if (!car) return null;

	return (
		<div className='SmallCard'>
			<img src={car.imagem} alt={car.modelo} className='SmallCard-img' />
			<div className='SmallCard-arrow'>↗</div>
			<div className='SmallCard-content'>
				<h3 className='SmallCard-title'>
					{car.marca} {car.modelo}
				</h3>

				<div className='SmallCard-price'>{car.preco} €</div>

				<div className='SmallCard-details'>
					{[car.combustivel, String(car.ano), car.caixa].map(detail => (
						<span key={detail} className='SmallCard-detail'>
							{detail}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default SmallCard;
