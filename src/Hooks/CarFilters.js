import { useState } from 'react';


function CarFilters() {
    const [filters, setFilters] = useState({
        search: "",
        combustivel: "all",
        caixa: "all",
        maxPreco: null,
        maxKm: null,
    });

    const appFilters = (listing) =>
        listing.filter((item) => {
            const carSearch =
                item.marca.toLowerCase().includes(filters.search.toLowerCase()) ||
                item.modelo.toLowerCase().includes(filters.search.toLowerCase());
            const combustivelSearch = filters.combustivel === "all" || item.combustivel === filters.combustivel;
            const caixaSearch = filters.caixa === "all" || filters.caixa;
            const precoSearch = filters.maxPreco === null || item.preco <= filters.maxPreco;
            const kmSearch = filters.maxKm === null || item.km <= filters.maxKm;

            return carSearch && combustivelSearch && caixaSearch && precoSearch && kmSearch
        });
    
    return { filters, setFilters, appFilters };
    
}

export default CarFilters;