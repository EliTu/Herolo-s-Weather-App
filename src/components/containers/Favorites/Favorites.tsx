import React from 'react';
import styles from './Favorites.module.css';

interface Props {}

const Favorites: React.FC<Props> = () => {
	const { FavoritesStyles } = styles;
	return <div className={FavoritesStyles}></div>;
};

export default Favorites;
