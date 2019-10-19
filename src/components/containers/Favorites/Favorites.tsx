import React from 'react';
import { connect } from 'react-redux';
import FavoritesList from './FavoritesList/FavoritesList';
import styles from './Favorites.module.css';

interface IProps {
	isLoading: boolean;
	error: string;
}

const Favorites: React.FC<IProps> = ({ isLoading, error }) => {
	const { FavoritesStyles } = styles;
	return (
		<div className={FavoritesStyles}>
			{!isLoading && !error && <FavoritesList />}
		</div>
	);
};
// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		isLoading: state.favorites.isLoading,
		error: state.currentWeather.error,
	};
};

export default connect(mapStateToProps)(Favorites);
