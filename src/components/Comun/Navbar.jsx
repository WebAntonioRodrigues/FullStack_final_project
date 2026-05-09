import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../../styles/Comun/Buttons.css';
import '../../styles/Comun/Navbar.css';
import '../../styles/Style.css';

function Navbar() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	function handleSearch() {
		setIsSearchOpen(prev => !prev);
	}

	function handleSearchChange(e) {
		setSearchQuery(e.target.value);
	}

	const searchInputClass = isSearchOpen ? 'Navbar-search-input visible' : 'Navbar-search-input';

	return (
		<nav className='Navbar-container'>
			<div className='logo-container'>
				<p className='logo'>AutoLux</p>
			</div>

			<div className='menu-container'>
				<a href='/'>HOME</a>
				<a href='/Catalog'>CATALOG</a>
				<a href='/Favorites'>FAVORITES</a>
			</div>

			<div className='Navbar-right'>
				<div className='Navbar-search-container'>
					<input type='text' placeholder='Search...' className={searchInputClass} value={searchQuery} onChange={handleSearchChange} autoFocus={isSearchOpen} />
					<button className='Navbar-search-btn' onClick={handleSearch}>
						{isSearchOpen ? '✕' : '🔍'}
					</button>
				</div>
				<Link className='link' to='/Contact'>
					<Button className='btn-Nav' text='ENQUIRE' textClassName='text-btn-primary' />
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
