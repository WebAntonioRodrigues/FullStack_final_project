import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../../styles/Comun/Buttons.css';
import '../../styles/Comun/Navbar.css';
import '../../styles/Style.css';

function Navbar() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleSearch() {
		setIsSearchOpen(prev => !prev);
	}

	function handleSearchChange(event) {
		setSearchQuery(event.target.value);
	}

	function handleMenuChange() {
		setIsMenuOpen(prev=> !prev);
	}

	let searchInputClass = 'Navbar-search-input';
	if (isSearchOpen === true) {
		searchInputClass = 'Navbar-search-input visible';
	}

	let menuClass = 'menu-container';
	if (isMenuOpen === true) {
		menuClass = 'menu-container open';
	}

	let searchIcon = '🔍';
	if (isSearchOpen === true) {
		searchIcon = '✕';
	}

	let hamburgerIcon = '☰';
	if (isMenuOpen === true) {
		hamburgerIcon = '✕';
	}

	return (
		<nav className='Navbar-container'>
			<div className='logo-container'>
				<p className='logo'>AutoLux</p>
			</div>

			<div className={menuClass}>
				<a href='/'>HOME</a>
				<a href='/Catalog'>CATALOG</a>
				<a href='/Favorites'>FAVORITES</a>
			</div>

			<div className='Navbar-right'>
				<div className='Navbar-search-container'>
					<input type='text' placeholder='Search...' className={searchInputClass} value={searchQuery} onChange={handleSearchChange} autoFocus={isSearchOpen} />
					<button className='Navbar-search-btn' onClick={handleSearch}>
						{searchIcon}
					</button>
				</div>
				<Link className='link' to='/Contact'>
					<Button className='btn-Nav' text='ENQUIRE' textClassName='text-btn-primary' />
				</Link>
				<button className='Navbar-hamburger' onClick={handleMenuChange}>
					{hamburgerIcon}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
