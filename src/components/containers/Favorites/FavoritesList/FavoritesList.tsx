import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '../../../display/UI/Card/Card';
import { fireCurrentWeatherHttpRequest } from '../../WeatherDisplayContainer/store/actions';
import { fireFiveDaysForecastHttpRequest } from '../../WeatherDisplayContainer/store/actions';
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
		countryName: string,
		cityName: string,
		dispatchIdentifier: string
	) => void;
	history: any;
	getClickedItemWeatherCurrentData: (
		key: string,
		countryName: string,
		cityName: string,
		dispatchIdentifier: string
	) => void;
	getClickedItemFiveDaysForecast: (key: string) => void;
}

export const FavoritesList: React.FC<IProps> = ({
	favorites,
	favoritesWeatherData,
	getFavoritesWeatherData,
	history,
	getClickedItemWeatherCurrentData,
	getClickedItemFiveDaysForecast,
}) => {
	const { FavoritesListStyles, CardWrapper } = styles;

	console.log(history);
	useEffect(() => {
		favorites.map(({ key, cityName, countryName }) =>
			getFavoritesWeatherData(
				key,
				cityName,
				countryName,
				'favortiesWeather'
			)
		);
	}, [favorites, getFavoritesWeatherData]);

	const handleFavoriteCardClick = (
		key: string,
		cityName: string,
		countryName: string
	) => {
		getClickedItemWeatherCurrentData(
			key,
			cityName,
			countryName,
			'currentWeather'
		);
		getClickedItemFiveDaysForecast(key);
		history.push('/');
	};

	return (
		<div className={FavoritesListStyles}>
			{favoritesWeatherData.map(
				({ cityName, countryName, key, WeatherText, Temperature }) => {
					const { Metric } = Temperature;

					return (
						<div
							className={CardWrapper}
							key={key}
							onClick={() =>
								handleFavoriteCardClick(
									key,
									cityName,
									countryName
								)
							}
						>
							<Card
								mainHeading={`${cityName}, ${countryName}`}
								description={WeatherText}
								date={'Current:'}
								temperatures={`${Metric.Value}${Metric.Unit}`}
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
					'favoritesWeather',
					cityName,
					countryName
				)
			),
		getClickedItemWeatherCurrentData: (
			key: string,
			cityName: string,
			countryName: string
		) =>
			dispatch(
				fireCurrentWeatherHttpRequest(
					key,
					'currentWeather',
					cityName,
					countryName
				)
			),
		getClickedItemFiveDaysForecast: (key: string) =>
			dispatch(fireFiveDaysForecastHttpRequest(key)),
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(FavoritesList)
);
