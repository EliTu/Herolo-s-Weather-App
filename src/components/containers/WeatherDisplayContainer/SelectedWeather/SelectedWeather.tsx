import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fireCurrentWeatherHttpRequest } from '../store/actions';
import setWeatherIcon from './setWeatherIcon';
import FavIcon from '../../../display/UI/Icon/FavIcon/FavIcon';
import styles from './SelectedWeather.module.css';

interface IProps {
	currentWeatherHttpRequest: (val: string) => void;
	weatherData: any;
}

export const SelectedWeather: React.FC<IProps> = ({
	currentWeatherHttpRequest,
	weatherData,
}) => {
	const { SelectedWeatherStyles, testDiv } = styles;

	const [isFavorite, setIsFavorite] = useState(false);
	const [weatherIconImage, setWeatherIconImage] = useState();

	// On component mount, by default, set and display Tel-Aviv's weather info
	useEffect(() => {
		currentWeatherHttpRequest('215854');
	}, [currentWeatherHttpRequest]);

	useEffect(() => {
		let image;
		if (weatherData.IsDayTime && weatherData.WeatherText)
			image = setWeatherIcon(
				weatherData.IsDayTime,
				weatherData.WeatherText
			);

		setWeatherIconImage(image);
	}, [weatherData.IsDayTime, weatherData.WeatherText]);

	console.log(weatherData);

	return (
		<div className={SelectedWeatherStyles}>
			<div className={testDiv}>{weatherIconImage}</div>
			<p>{weatherData.WeatherText}</p>
			<span>&#176;</span>
			<button>
				<FavIcon isFavorite={isFavorite} />
			</button>
		</div>
	);
};

// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		weatherData: state.currentWeather.selectedResult,
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
