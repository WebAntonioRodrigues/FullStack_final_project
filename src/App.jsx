import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Comun/Navbar';
import Footer from './components/Comun/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';

function App() {
	return (
		<BrowserRouter>
			<Navbar></Navbar>

			<Routes>
				<Route path='/' element={<Home></Home>} />
				<Route path='/Catalog' element={<Catalog></Catalog>} />
				<Route path='/Detail' element={<Detail></Detail>} />
				<Route path='/Favorites' element={<Favorites></Favorites>} />
				<Route path='/Contact' element={<Contact></Contact>} />
			</Routes>

			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
