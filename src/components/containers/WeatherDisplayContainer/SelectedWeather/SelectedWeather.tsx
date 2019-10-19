import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import SelectedWeatherInfo from './SelectedWeatherInfo/SelectedWeatherInfo';
import FavIcon from '../../../display/UI/Icon/FavIcon/FavIcon';
import { fireCurrentWeatherHttpRequest } from '../store/actions';
import {
	addToFavoritesAction,
	removeFromFavoritesAction,
} from '../../Favorites/store/actions';
import {
	setCorrectDateFormat,
	setDayOfTheWeek,
} from '../../../../utilities/convert-functions/dates';
import setWeatherIcon from './setWeatherIcon';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './SelectedWeather.module.css';

interface IProps {
	currentWeatherHttpRequest: (
		val: string,
		cityName: string,
		countryName: string
	) => void;
	setNewFavoriteItem: (key: string) => void;
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
}

export const SelectedWeather: React.FC<IProps> = ({
	currentWeatherHttpRequest,
	setNewFavoriteItem,
	removeFromFavorites,
	favoritesList,
	weatherData,
	isLoading,
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

	// On component mount, by default, set and display Tel-Aviv's weather info
	// useEffect(() => {
	// 	currentWeatherHttpRequest('215854', 'Tel-Aviv', 'Israel');
	// }, [currentWeatherHttpRequest]);

	useEffect(() => {
		const checkForFavoriteListing = (): any => {
			let isListed;
			console.log(`${key} - ITEM KEY`);
			console.log(favoritesList);
			if (favoritesList) isListed = favoritesList.includes(key);

			console.log(`${isListed} - ISLISTED RESULT`);
			return isListed;
		};
		setIsFavorite(() => checkForFavoriteListing());
	}, [favoritesList, key, isFavorite]);

	useEffect(() => {
		let weatherIcon: IconDefinition;
		if (!isLoading && WeatherIcon)
			weatherIcon = setWeatherIcon(IsDayTime, WeatherIcon);
		setWeatherIconType(() => weatherIcon);
	}, [IsDayTime, WeatherIcon, isLoading]);

	const handleFavoriteButtonClick = (key: string) => {
		console.log(`${isFavorite} - ISFAVORITE RESULT`);
		if (!isFavorite) {
			setNewFavoriteItem(key);
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
		currentWeatherHttpRequest: (
			key: string,
			cityName: string,
			countryName: string
		) =>
			dispatch(fireCurrentWeatherHttpRequest(key, cityName, countryName)),

		setNewFavoriteItem: (key: string) =>
			dispatch(addToFavoritesAction(key)),

		removeFromFavorites: (key: string) =>
			dispatch(removeFromFavoritesAction(key)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedWeather);
