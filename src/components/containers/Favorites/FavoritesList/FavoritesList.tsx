import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../../display/UI/Card/Card';
import { fireCurrentWeatherHttpRequest } from '../../WeatherDisplayContainer/store/actions';
import styles from './FavoritesList.module.css';

interface IProps {
	favorites: { key: string; cityName: string; countryName: string }[];
	favoritesWeatherData: {
		key: string;
		cityName: string;
		countryName: string;
		WeatherText: string;
		Temperature: { Metric: { Value: number; Unit: string } };
	}[];
	getFavoritesWeatherData: (
		key: string,
		dispatchIdentifier: string,
		cityName: string,
		countryName: string
	) => void;
}

export const FavoritesList: React.FC<IProps> = ({
	favorites,
	favoritesWeatherData,
	getFavoritesWeatherData,
}) => {
	const { FavoritesListStyles, CardWrapper } = styles;

	useEffect(() => {
		if (favorites.length > 0)
			favorites.map(({ key, cityName, countryName }) =>
				getFavoritesWeatherData(
					key,
					'favortieWeather',
					cityName,
					countryName
				)
			);
	}, [favorites, getFavoritesWeatherData]);

	return (
		<div className={FavoritesListStyles}>
			{favoritesWeatherData.map(
				({ key, cityName, countryName, WeatherText, Temperature }) => {
					const { Metric } = Temperature;

					return (
						<div className={CardWrapper}>
							<Card
								mainHeading={`${cityName}, ${countryName}`}
								description={WeatherText}
								date={`${Metric.Value}${Metric.Unit}`}
								key={key}
								link={'www'}
							/>
						</div>
					);
				}
			)}
		</div>
	);
};
// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		favorites: state.favorites.favoritesList,
		favoritesWeatherData: state.favorites.weatherData,
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
					'favoritesWeatherData',
					cityName,
					countryName
				)
			),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavoritesList);
