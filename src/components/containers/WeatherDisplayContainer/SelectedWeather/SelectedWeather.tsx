import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fireCurrentWeatherHttpRequest } from '../store/actions';
import SelectedWeatherInfo from './SelectedWeatherInfo/SelectedWeatherInfo';
import FavIcon from '../../../display/UI/Icon/FavIcon/FavIcon';
import { ResultListTypes } from '../../SearchContainer/SearchContainer';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import setWeatherIcon from './setWeatherIcon';
import styles from './SelectedWeather.module.css';

interface IProps {
	currentWeatherHttpRequest: (val: string) => void;
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
	};
	isLoading: boolean;
	searchResults: ResultListTypes;
}

export const SelectedWeather: React.FC<IProps> = ({
	currentWeatherHttpRequest,
	weatherData,
	isLoading,
	searchResults,
}) => {
	const { SelectedWeatherStyles } = styles;

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
	} = weatherData;

	// On component mount, by default, set and display Tel-Aviv's weather info
	// useEffect(() => {
	// 	currentWeatherHttpRequest('215854');
	// }, [currentWeatherHttpRequest]);

	useEffect(() => {
		let weatherIcon: IconDefinition;
		if (!isLoading && WeatherIcon)
			weatherIcon = setWeatherIcon(IsDayTime, WeatherIcon);
		setWeatherIconType(() => weatherIcon);
	}, [IsDayTime, WeatherIcon, isLoading]);

	return (
		<div className={SelectedWeatherStyles} id={id}>
			<SelectedWeatherInfo
				weatherIconType={weatherIconType}
				isLoading={isLoading}
				infoLink={Link}
				localName={searchResults.LocalizedName}
				temperature={Temperature}
			/>
			<p>{WeatherText}</p>
			<button>
				<FavIcon isFavorite={isFavorite} />
			</button>
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
		currentWeatherHttpRequest: (key: string) =>
			dispatch(fireCurrentWeatherHttpRequest(key)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedWeather);
