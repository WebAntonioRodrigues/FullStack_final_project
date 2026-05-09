import { Link } from 'react-router-dom';
import '../../styles/Home/Hero.css';
import '../../styles/Style.css';
import '../../styles/Comun/Buttons.css';
import Button from '../Comun/Button';
import QuickSearch from './QuickSearch';
import divider from '../../assets/Home/Hero/Divider.png';

function Hero() {
	return (
		<section className='hero-mega-container'>
			<div className='hero-container'>
				<div className='hero-subtitle-container'>
					<img src={divider} alt='' className='divider' />
					<div>
						<p className='hero-subtitle'>LIMITED EDITION ARRIVAL</p>
					</div>
				</div>
				<div className='hero-heading'>
					<h1 className='heading'>
						THE NEW <br />
						<span className='heading-highlight'>AVENTADOR</span>
					</h1>
				</div>
				<div className='hero-text-container'>
					<p className='hero-text'>Precision engineering meets aesthetic perfection. Experience the pinnacle of automotive craftsmanship with our curated winter collection.</p>
				</div>
				<div className='hero-btn-container'>
					<div>
						<Link className='link' to='/Catalog'>
							<Button className='btn-primary' text='VIEW SHOWCASE' textClassName='text-btn-primary' />
						</Link>
					</div>
					<div>
						<Link className='link' to='/Detail'>
							<Button className='btn-secondary' text='TECHNICAL SPECS →' textClassName='text-btn-secondary' />
						</Link>
					</div>
				</div>
			</div>

			<div className='hero-quicksearch'>
				<QuickSearch />
			</div>
		</section>
	);
}

export default Hero;
