import { useState } from 'react';

function CarFilters() {
	const [filters, setFilters] = useState({
		search: '',
		marca: 'all',
		combustivel: [],
		caixa: null,
		maxPreco: 2000000,
		km: null,
	});

	const appFilters = listing =>
		listing.filter(item => {
			
			const carSearch = item.marca.toLowerCase().includes(filters.search.toLowerCase()) || item.modelo.toLowerCase().includes(filters.search.toLowerCase());

			
			const marcaSearch = filters.marca === 'all' || item.marca === filters.marca;

			
			const combustivelSearch = filters.combustivel.length === 0 || filters.combustivel.includes(item.combustivel);

			
			const caixaSearch = filters.caixa === null || item.caixa === filters.caixa;

			
			const precoSearch = filters.maxPreco === null || Number(item.preco.replace('.', '')) <= filters.maxPreco;

		
			const KM_MAP = {
				'Under 20k': [0, 20000],
				'20k - 50k': [20000, 50000],
				'50k+': [50000, Infinity],
			};
			const kmRange = KM_MAP[filters.km];
			const kmSearch = !kmRange || (item.km >= kmRange[0] && item.km < kmRange[1]);

			return carSearch && marcaSearch && combustivelSearch && caixaSearch && precoSearch && kmSearch;
		});

	return { filters, setFilters, appFilters };
}

export default CarFilters;