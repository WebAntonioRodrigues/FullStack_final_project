import { useParams } from 'react-router-dom';
import useCarList from '../Hooks/useCarList';
import DetailHero from '../components/Detail/DetailHero';
import Pricing from '../components/Detail/Pricing';
import Technical from '../components/Detail/Technical';


function Detail() {
	const { id } = useParams();
	const { list } = useCarList();

	const car = list.find(item => item.id === Number(id));

	if (!car) return null;

	return (
		<div>
			<DetailHero car={car}></DetailHero>
			<Pricing car={car}></Pricing>
			<Technical car={car}></Technical>
		</div>
	);
}

export default Detail;
