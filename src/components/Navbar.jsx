import "../styles/Style.css"


function Navbar() {
	return (
		<nav>
			<div className="logo">AutoLux</div>

			<div>
				<a href='Home'>HOME</a>
				<a href='Catalog'>CATALOG</a>
				<a href='Favorites'>FAVORITES</a>
				<a href='AboutUs'>ABOUT US</a>
			</div>

			<div>
				<button>Icone de procura</button>
				<a href='Contact'>Enquire</a>
			</div>
		</nav>
	);
}

export default Navbar;
