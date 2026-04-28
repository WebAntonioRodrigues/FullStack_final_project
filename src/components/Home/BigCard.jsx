import "../../styles/Home/BigCard.css"

function BigCard({ car }) {
    if (!car) return null;
    
    return (
			<div className='BigCard'>
				<img src={car.imagem} alt={car.modelo} className='BigCard-img' />

				<div className='BigCard-Content'>
					<div>
						<h2 className='BigCard-Title'>
							{car.marca} {car.modelo}
                    </h2>
                    <div className="BigCard-subtitle">
                        <span>{car.ano}</span>
                        <span>{car.combustivel} </span>
                        <span> {car.km} Km </span>
                    </div>
                </div>
                <div className="BigCard-price-container">
                    <div className="BigCard-price">
                        {car.preco}€
                    </div>
                </div>
				</div>
			</div>
		);
}

export default BigCard;