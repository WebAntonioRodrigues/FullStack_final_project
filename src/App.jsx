import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Comun/Navbar';
import Footer from './components/Comun/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import FavoritesProvider from './context/FavoritesProvider';

function App() {
	return (
		<BrowserRouter>
			<FavoritesProvider>
				<Navbar></Navbar>

				<Routes>
					<Route path='/' element={<Home></Home>} />
					<Route path='/Catalog' element={<Catalog></Catalog>} />
					<Route path='/Detail/:id' element={<Detail></Detail>} />
					<Route path='/Favorites' element={<Favorites></Favorites>} />
					<Route path='/Contact' element={<Contact></Contact>} />
				</Routes>

				<Footer></Footer>
			</FavoritesProvider>
		</BrowserRouter>
	);
}

export default App;
