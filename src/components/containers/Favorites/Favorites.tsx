import React from 'react';
import { connect } from 'react-redux';
import FavoritesList from './FavoritesList/FavoritesList';
import ErrorMessage from '../../display/UI/ErrorMessage/ErrorMessage';
import styles from './Favorites.module.css';

interface IProps {
	isLoading: boolean;
	error: string;
	favorites: {}[];
	weatherData: {}[];
}

export const Favorites: React.FC<IProps> = ({
	isLoading,
	error,
	favorites,
	weatherData,
}) => {
	const { FavoritesStyles, noFavoritesMessage } = styles;
	return (
		<section className={FavoritesStyles}>
			{!isLoading &&
			favorites.length === 0 &&
			weatherData.length === 0 ? (
				<p className={noFavoritesMessage}>
					There seems to be no favorite items available to display!
					Please search for your favorite destinations and press on
					the
					<span role="img"> ❤ </span>
					button to add to your favorites list.
				</p>
			) : error ? (
				<ErrorMessage errorDetails={error} />
			) : (
				!isLoading && <FavoritesList />
			)}
		</section>
	);
};
// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		isLoading: state.favorites.isLoading,
		error: state.currentWeather.error,
		favorites: state.favorites.favoritesList,
		weatherData: state.favorites.weatherData,
	};
};

export default connect(mapStateToProps)(Favorites);
