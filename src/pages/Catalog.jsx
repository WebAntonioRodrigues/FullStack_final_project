import CarList from '../Hooks/useCarList';
import CarFilters from '../Hooks/CarFilters';
import CatalogHeader from '../components/Catalog/CatalogHeader';

function Catalog() {
	/*
	const { list } = CarList();
	const { filters, setFilters, appFilters } = CarFilters(list);
*/

	return (
		<div>
			<CatalogHeader></CatalogHeader>
		</div>
	);

}

export default Catalog;
