import { Link } from 'react-router-dom';
import '../../styles/Home/Featured.css';
import '../../styles/Style.css';

function Featured() {
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
			<div></div>
		</section>
	);
}

export default Featured;
