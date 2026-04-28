import { useParams } from 'react-router-dom';
import useCarList from '../Hooks/useCarList';

function Detail() {
	  const { id } = useParams();
		const { list } = useCarList();

		const car = list.find(item => item.id === Number(id));

		if (!car) return <p>Carro não encontrado</p>;
	  return (
			<div>
				<h1>
					{car.marca} {car.modelo}
				</h1>
				<img src={car.imagem} alt={car.modelo} />
				<p>
					{car.ano} · {car.km} km · {car.combustivel}
				</p>
				<p>{car.preco} €</p>
			</div>
		);
}

export default Detail;
