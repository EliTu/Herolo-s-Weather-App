import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../../display/UI/Card/Card';
import { fireCurrentWeatherHttpRequest } from '../../WeatherDisplayContainer/store/actions';
import styles from './FavoritesList.module.css';

interface IProps {
	favorites: { key: string; cityName: string; countryName: string }[];
	getFavoritesWeatherData: (
		key: string,
		cityName: string,
		countryName: string
	) => void;
}

export const FavoritesList: React.FC<IProps> = ({
	favorites,
	getFavoritesWeatherData,
}) => {
	const { FavoritesListStyles, CardWrapper } = styles;

	useEffect(() => {
		// make an HTTP request
	}, []);

	return (
		<div className={FavoritesListStyles}>
			{favorites.map(({ key, cityName, countryName }) => {
				return (
					<div className={CardWrapper}>
						<Card
							mainHeading={cityName}
							description={countryName}
							date={'10.10.20'}
							key={key}
							link={'www'}
						/>
					</div>
				);
			})}
		</div>
	);
};
// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		favorites: state.favorites.favoritesList,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		getFavoritesWeatherData: (
			key: string,
			cityName: string,
			countryName: string
		) =>
			dispatch(
				fireCurrentWeatherHttpRequest(
					key,
					cityName,
					countryName,
					'favoritesWeatherData'
				)
			),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavoritesList);
