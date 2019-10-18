import React from 'react';
import styles from './Favorites.module.css';

interface IProps {}

const Favorites: React.FC<IProps> = () => {
	const { FavoritesStyles } = styles;
	return <div className={FavoritesStyles}>

    </div>;
};

export default Favorites;
