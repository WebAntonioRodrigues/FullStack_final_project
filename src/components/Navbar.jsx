import "../styles/Style.css"
import '../styles/Navbar.css';


function Navbar() {
	return (
		<nav className='Navbar-container'>
			<div className='logo-container'>
				<p className='logo'>AutoLux</p>
			</div>

			<div className='menu-container'>
				<a href='Home'>HOME</a>
				<a href='Catalog'>CATALOG</a>
				<a href='Favorites'>FAVORITES</a>
				<a href='AboutUs'>ABOUT US</a>
			</div>

			<button className='button'>
				<p className="text-button">ENQUIRE</p>
			</button>
		</nav>
	);
}

export default Navbar;
