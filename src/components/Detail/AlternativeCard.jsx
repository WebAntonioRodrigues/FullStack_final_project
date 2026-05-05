import { Link } from 'react-router-dom';
import '../../styles/Detail/AlternativeCard.css'; 

function AlternativeCard({ item }) {
	if (!item) return null;

	return (
		<Link className='Alternativecard-link' to={`/Detail/${item.id}`}>
			<div className='Alternativescard'>
				<div className='Alternativecard-img-wrapper'>
					<img src={item.imagem} alt={item.modelo} className='Alternativecard-img' />
				</div>
				<div className='Alternativescard-info'>
					<p className='Alternativescard-info-ano'>{item.ano}</p>
					<h3 className='Alternativescard-info-nome'>
						{item.marca} {item.modelo}
					</h3>
					<p className='Alternativescard-info-preco'>€ {item.preco.toLocaleString('pt-PT')}</p>
				</div>
			</div>
		</Link>
	);
}

export default AlternativeCard;
