import { useState } from 'react';
import { FavoritesContext } from './FavoritesContext';

function FavoritesProvider({ children }) {
	const [favorites, setFavorites] = useState(() => {
		const saved = localStorage.getItem('favorites');
		return saved ? JSON.parse(saved) : [];
	});

	const addFavorite = car => {
		setFavorites(prev => {
			const updated = [...prev, car];
			localStorage.setItem('favorites', JSON.stringify(updated));
			return updated;
		});
	};

	const removeFavorite = id => {
		setFavorites(prev => {
			const updated = prev.filter(car => car.id !== id);
			localStorage.setItem('favorites', JSON.stringify(updated));
			return updated;
		});
	};

	const isFavorite = id => favorites.some(car => car.id === id);

	return <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>{children}</FavoritesContext.Provider>;
}

export default FavoritesProvider;
