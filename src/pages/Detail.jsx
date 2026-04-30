import { useParams } from 'react-router-dom';
import useCarList from '../Hooks/useCarList';
import DetailHero from '../components/Detail/DetailHero';
import "../styles/Detail/Detail.css";

function Detail() {
	const { id } = useParams();
	const { list } = useCarList();

	const car = list.find(item => item.id === Number(id));

	if (!car) return null;

	return (
		<div className='Detail-page'>
			<DetailHero car={car} />
		</div>
	);
}

export default Detail;
