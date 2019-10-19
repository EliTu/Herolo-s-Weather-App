import React from 'react';
import FavoritesList from './FavoritesList/FavoritesList';
import styles from './Favorites.module.css';

interface IProps {}

const Favorites: React.FC<IProps> = () => {
	const { FavoritesStyles } = styles;
	return (
		<div className={FavoritesStyles}>
			<FavoritesList />
		</div>
	);
};

export default Favorites;
