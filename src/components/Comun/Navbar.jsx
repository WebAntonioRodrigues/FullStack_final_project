import { Link } from 'react-router-dom';
import Button from './Button';
import '../../styles/Comun/Buttons.css';
import '../../styles/Comun/Navbar.css';
import '../../styles/Style.css';

function Navbar() {
	return (
		<nav className='Navbar-container'>
			<div className='logo-container'>
				<p className='logo'>AutoLux</p>
			</div>

			<div className='menu-container'>
				<a href='/'>HOME</a>
				<a href='/Catalog'>CATALOG</a>
				<a href='/Favorites'>FAVORITES</a>
				<a href='AboutUs'>ABOUT US</a>
			</div>

			<Link className='link' to='/Contact'>
				<Button className='btn-Nav' text='ENQUIRE' textClassName='text-btn-primary'></Button>
			</Link>
		</nav>
	);
}

export default Navbar;
