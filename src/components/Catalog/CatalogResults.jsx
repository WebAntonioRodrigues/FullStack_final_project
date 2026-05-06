import "../../styles/Catalog/CatalogResults.css"
import CatalogCard from "./CatalogCard";
import useCarList from '../../Hooks/useCarList';


function CatalogResults() {

    const { list } = useCarList();

    const limitedResults = [];

		for (let i = 0; i < list.length && i < 6; i++) {
			limitedResults[i] = list[i];
		}
    
    return (
			<section className='CatalogResults-section'>
				<div className='CatalogResults-Search-container'></div>

				<div className='CatalogResults-vehicle-grid'>
					<div className='CatalogResults-filters'></div>
					<div className='CatalogResults-container'>
						{limitedResults.map(car => (
							<CatalogCard key={car.id} car={car} />
						))}
					</div>
					<div className='CatalogResults-Load'></div>
				</div>
			</section>
		);
}

export default CatalogResults;

