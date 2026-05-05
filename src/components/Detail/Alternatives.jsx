import { Link } from 'react-router-dom';
import useCarList from '../../Hooks/useCarList';
import AlternativeCard from './AlternativeCard';
import '../../styles/Detail/Alternatives.css';
import '../../styles/Style.css';

function Alternatives({ car }) {
	const { list } = useCarList();

	if (!car) return null;

	const alternative = [];

	for (let i = 0; i < list.length; i++) {
		if (list[i].id !== car.id && alternative.length < 3) {
			alternative[alternative.length] = list[i];
		}
	}

	return (
		<section className='Alternatives-section'>
			<div className='Alternatives-heading-container'>
				<div className='Alternatives-title'>
					<p className='Alternatives-txt'>CURATED ALTERNATIVES</p>
					<div className='Technical-line'></div>
				</div>
				<Link className='Alternatives-link' to="/Catalog"> VIEW ALL INVENTORY</Link>
			</div>

			<div className='Alternatives-grid'>
				<AlternativeCard item={alternative[0]} />
				<AlternativeCard item={alternative[1]} />
				<AlternativeCard item={alternative[2]} />
			</div>
		</section>
	);
}

export default Alternatives;
