import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import SelectedWeatherInfo from './SelectedWeatherInfo/SelectedWeatherInfo';
import FavIcon from '../../../display/UI/Icon/FavIcon/FavIcon';
import { fireCurrentWeatherHttpRequest } from '../store/actions';
import {
	addToFavoritesAction,
	removeFromFavoritesAction,
	initFavoritesAction,
} from '../../Favorites/store/actions';
import {
	setCorrectDateFormat,
	setDayOfTheWeek,
} from '../../../../utilities/convert-functions/dates';
import setWeatherIcon from './setWeatherIcon';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './SelectedWeather.module.css';

interface IProps {
	setNewFavoriteItem: (
		key: string,
		cityName: string,
		countryName: string
	) => void;
	removeFromFavorites: (key: string) => void;
	favoritesList: string[];
	weatherData: {
		LocalObservationDateTime: string;
		EpochTime: number;
		WeatherText: string;
		WeatherIcon: number;
		IsDayTime: boolean;
		Link: string;
		Temperature: {
			Metric: {
				Value: number;
				Unit: string;
			};
		};
		cityName: string;
		countryName: string;
		key: string;
	};
	isLoading: boolean;
	initFavorites: () => void;
}

export const SelectedWeather: React.FC<IProps> = ({
	setNewFavoriteItem,
	removeFromFavorites,
	favoritesList,
	weatherData,
	isLoading,
	initFavorites,
}) => {
	const { SelectedWeatherStyles, buttonWrapper } = styles;

	const [isFavorite, setIsFavorite] = useState(false);
	const [weatherIconType, setWeatherIconType] = useState();

	// Destructured weatherData:
	const {
		LocalObservationDateTime: localDate,
		EpochTime,
		WeatherText,
		WeatherIcon,
		IsDayTime,
		Link,
		Temperature,
		cityName,
		countryName,
		key,
	} = weatherData;

	// Set correct date formats:

	const day = !isLoading && EpochTime ? setDayOfTheWeek(EpochTime) : '';
	const date = !isLoading && localDate ? setCorrectDateFormat(localDate) : '';

	useEffect(() => {
		initFavorites();
	}, [initFavorites]);

	useEffect(() => {
		const checkForFavoriteListing = (): any => {
			let isListed;
			if (favoritesList)
				isListed = favoritesList.some((el: any) => el.key === key);

			return isListed;
		};
		setIsFavorite(() => checkForFavoriteListing());
	}, [favoritesList, key, isFavorite]);

	// Set the current weather Icon according to data:
	useEffect(() => {
		let weatherIcon: IconDefinition;
		if (!isLoading && WeatherIcon)
			weatherIcon = setWeatherIcon(IsDayTime, WeatherIcon);
		setWeatherIconType(() => weatherIcon);
	}, [IsDayTime, WeatherIcon, isLoading]);

	const handleFavoriteButtonClick = (key: string) => {
		if (!isFavorite) {
			setNewFavoriteItem(key, cityName, countryName);
			setIsFavorite(() => true);
		} else {
			removeFromFavorites(key);
			setIsFavorite(() => false);
		}
	};

	return (
		<div className={SelectedWeatherStyles}>
			{!isLoading && weatherData.key && (
				<>
					<SelectedWeatherInfo
						weatherIconType={weatherIconType}
						isLoading={isLoading}
						infoLink={Link}
						cityName={cityName}
						countryName={countryName}
						temperature={Temperature}
						date={date}
						day={day}
					/>
					<ul>
						<li>{WeatherText}</li>
						<li>
							{Temperature &&
								`${Temperature.Metric.Value}${Temperature.Metric.Unit}`}
						</li>
					</ul>
					<div className={buttonWrapper}>
						<button onClick={() => handleFavoriteButtonClick(key)}>
							<FavIcon isFavorite={isFavorite} />
						</button>
					</div>
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		weatherData: state.currentWeather.selectedResult,
		isLoading: state.currentWeather.isLoading,
		searchResults: state.search.results,
		favoritesList: state.favorites.favoritesList,
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
	return {

		setNewFavoriteItem: (
			key: string,
			cityName: string,
			countryName: string
		) => dispatch(addToFavoritesAction(key, cityName, countryName)),

		removeFromFavorites: (key: string) =>
			dispatch(removeFromFavoritesAction(key)),
		initFavorites: () => dispatch(initFavoritesAction()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedWeather);
