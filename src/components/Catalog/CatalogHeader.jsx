import '../../styles/Catalog/CatalogHeader.css';
import useCarList from '../../Hooks/useCarList';

function CatalogHeader() {

    const { list } = useCarList();

	return (
		<section className='CatalogHeader-section'>
			<div className='CatalogHeader-container'>
				<div className='CatalogHeader-subtitle-container'>
					<p className='CatalogHeader-subtitle'>CURATED COLLECTION</p>
				</div>
				<div className='CatalogHeader-title-container'>
					<p className='CatalogHeader-title'>THE SHOWROOM</p>
				</div>
			</div>

			<div className='CatalogHeader-fav-container'>
                <p className='CatalogHeader-fav-number'> {list.length}  vehicles available</p>
			</div>
		</section>
	);
}

export default CatalogHeader;
