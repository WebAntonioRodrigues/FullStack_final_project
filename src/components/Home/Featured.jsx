import { Link } from 'react-router-dom';
import '../../styles/Home/Featured.css';
import '../../styles/Style.css';
import FeaturedCars from '../../Hooks/FeaturedCars';
import BigCard from './BigCard';
import SmallCard from './SmallCard';

function Featured() {
	const { featured } = FeaturedCars();

	return (
		<section className='Featured-mega-container'>
			<div className='Featured-header-container'>
				<div className='Featured-heading-container'>
					<p className='Featured-txt'>CURATED SELECTION</p>
					<h2 className='Featured-heading'>
						FEATURED <span className='Featured-heading-highlight'>VEHICLES</span>
					</h2>
				</div>
				<Link className='Featured-link' to='/Catalog'>
					<button className='Featured-btn'>EXPLORE FULL CATALOG</button>
				</Link>
			</div>
			<div className='Featured-Grid'>
				<Link className='Featured-link-car-big' to={`/Detail/${featured[0]?.id}`}>
					<BigCard car={featured[0]} />
				</Link>
				<Link className='Featured-link-car-small' to={`/Detail/${featured[1]?.id}`}>
					<SmallCard car={featured[1]} />
				</Link>
				<Link className='Featured-link-car-small' to={`/Detail/${featured[2]?.id}`}>
					<SmallCard car={featured[2]} />
				</Link>
				<Link className='Featured-link-car-big' to={`/Detail/${featured[3]?.id}`}>
					<BigCard car={featured[3]} />
				</Link>
			</div>
		</section>
	);
}

export default Featured;
