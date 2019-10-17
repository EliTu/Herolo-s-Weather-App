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
	weatherData: any;
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

	// On component mount, by default, set and display Tel-Aviv's weather info
	useEffect(() => {
		currentWeatherHttpRequest('215854');
	}, [currentWeatherHttpRequest]);

	useEffect(() => {
		let weatherIcon: IconDefinition;
		if (!isLoading && weatherData.length > 0)
			weatherIcon = setWeatherIcon(
				weatherData.isDayTime,
				weatherData.IconNumber
			);
		setWeatherIconType(() => weatherIcon);
	}, [
		isLoading,
		weatherData.Icon,
		weatherData.IconNumber,
		weatherData.WeatherText,
		weatherData.isDayTime,
		weatherData.length,
	]);

	return (
		<div className={SelectedWeatherStyles}>
			<SelectedWeatherInfo
				weatherIconType={weatherIconType}
				isLoading={isLoading}
				infoLink={weatherData.Link}
				localName={searchResults.LocalizedName}
				temperature={weatherData.Temperature}
			/>
			<p>{weatherData.WeatherText}</p>
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
