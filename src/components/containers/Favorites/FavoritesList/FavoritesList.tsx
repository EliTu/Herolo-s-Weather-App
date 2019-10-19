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
		countryName: string,
		cityName: string,
		dispatchIdentifier: string
	) => void;
}

export const FavoritesList: React.FC<IProps> = ({
	favorites,
	favoritesWeatherData,
	getFavoritesWeatherData,
}) => {
	const { FavoritesListStyles, CardWrapper } = styles;

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

	return (
		<div className={FavoritesListStyles}>
			<ul className={CardWrapper}>
				{favoritesWeatherData.map(
					({
						cityName,
						countryName,
						key,
						WeatherText,
						Temperature,
					}) => {
						const { Metric } = Temperature;

						return (
							<li key={key}>
								<Card
									mainHeading={`${cityName}, ${countryName}`}
									description={WeatherText}
									date={'Current:'}
									temperatures={`${Metric.Value}${Metric.Unit}`}
								/>
							</li>
						);
					}
				)}
			</ul>
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
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavoritesList);
