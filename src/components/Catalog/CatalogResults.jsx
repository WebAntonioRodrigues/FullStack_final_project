import { useState } from 'react';
import '../../styles/Catalog/CatalogResults.css';
import CatalogCard from './CatalogCard';
import useCarList from '../../Hooks/useCarList';

function CatalogResults() {
	const { list } = useCarList();
	const [limit, setLimit] = useState(6);
	const [order, setOrder] = useState('default');

	const handleLoadMore = () => {
		setLimit(value => value + 3);
	};

	let displayList = [...list];

	
	if (order === 'low-to-high') {
		displayList.sort((a, b) => a.preco - b.preco);
	} else if (order === 'high-to-low') {
		displayList.sort((a, b) => b.preco - a.preco);
	}

	
	const limitedResults = displayList.filter((car, index) => index < limit);

	return (
		<section className='CatalogResults-section'>
			<div className='CatalogResults-Search-container'></div>

			<div className='CatalogResults-vehicle-grid'>
				<div className='CatalogResults-filters'>
					<p className='CatalogResults-filters-txt'>sort:</p>
					<select className='CatalogResults-filters-select' onChange={e => setOrder(e.target.value)}>
						<option value='default'>Default</option>
						<option value='low-to-high'>price low to high</option>
						<option value='high-to-low'>price high to low</option>
					</select>
				</div>
				<div className='CatalogResults-container'>
					{limitedResults.map(car => (
						<CatalogCard key={car.id} car={car} />
					))}
				</div>
				<div className='CatalogResults-Load'>
					<button className='CatalogResults-btn' onClick={handleLoadMore}>
						Discover more
						<div className='CatalogResults-btn-arrow'>&#8964;</div>
					</button>
				</div>
			</div>
		</section>
	);
}

export default CatalogResults;
