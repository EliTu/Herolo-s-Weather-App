import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import SelectedWeatherInfo from './SelectedWeatherInfo/SelectedWeatherInfo';
import FavIcon from '../../../display/UI/Icon/FavIcon/FavIcon';
import { fireCurrentWeatherHttpRequest } from '../store/actions';
import { addToFavoritesAction } from '../../Favorites/store/actions';
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
	setNewFavoriteItem: (
		id: string,
		key: string,
		cityName: string,
		countryName: string
	) => void;
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
		id: string;
		cityName: string;
		countryName: string;
		key: string;
	};
	isLoading: boolean;
}

export const SelectedWeather: React.FC<IProps> = ({
	currentWeatherHttpRequest,
	setNewFavoriteItem,
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
		id,
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
		let weatherIcon: IconDefinition;
		if (!isLoading && WeatherIcon)
			weatherIcon = setWeatherIcon(IsDayTime, WeatherIcon);
		setWeatherIconType(() => weatherIcon);
	}, [IsDayTime, WeatherIcon, isLoading]);

	const handleFavoriteButtonClick: any = (
		id: string,
		key: string,
		cityName: string,
		countryName: string
	) => {
		setNewFavoriteItem(id, key, cityName, countryName);
		setIsFavorite(() => !isFavorite);
	};

	return (
		<div className={SelectedWeatherStyles} id={id}>
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
						<button
							onClick={() =>
								handleFavoriteButtonClick(
									id,
									key,
									cityName,
									countryName
								)
							}
						>
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

		setNewFavoriteItem: (
			id: string,
			key: string,
			cityName: string,
			countryName: string
		) => dispatch(addToFavoritesAction(id, key, cityName, countryName)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedWeather);
