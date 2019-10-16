import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fireCurrentWeatherHttpRequest } from '../store/actions';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import setWeatherIcon from './setWeatherIcon';
import Icon from '../../../display/UI/Icon/Icon';
import FavIcon from '../../../display/UI/Icon/FavIcon/FavIcon';
import Loader from '../../../display/UI/Loader/Loader';
import { ResultListTypes } from '../../SearchContainer/SearchContainer';
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
	const { SelectedWeatherStyles, WeatherInfo } = styles;

	const [isFavorite, setIsFavorite] = useState(false);
	const [weatherIconType, setWeatherIconType] = useState();

	// On component mount, by default, set and display Tel-Aviv's weather info
	useEffect(() => {
		currentWeatherHttpRequest('215854');
	}, [currentWeatherHttpRequest]);

	useEffect(() => {
		let weatherIcon: IconDefinition;
		if (!isLoading)
			weatherIcon = setWeatherIcon(
				weatherData.isDayTime,
				weatherData.WeatherText
			);
		setWeatherIconType(() => weatherIcon);
	}, [isLoading, weatherData.WeatherText, weatherData.isDayTime]);

	return (
		<div className={SelectedWeatherStyles}>
			{isLoading &&
			!weatherData.WeatherText &&
			!weatherData.Temperature ? (
				<Loader />
			) : (
				<>
					<div className={WeatherInfo}>
						{!isLoading && (
							<Icon iconType={weatherIconType} size={'7x'} />
						)}
						<ul>
							<li>
								<a href={weatherData.Link}>
									{!searchResults.LocalizedName
										? 'Tel-Aviv'
										: searchResults.LocalizedName}
								</a>
							</li>
							<li>
								{weatherData.Temperature &&
									`${weatherData.Temperature.Metric.Value}${weatherData.Temperature.Metric.Unit}`}
							</li>
						</ul>
					</div>
					<p>{weatherData.WeatherText}</p>
					<button>
						<FavIcon isFavorite={isFavorite} />
					</button>
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
		currentWeatherHttpRequest: (key: string) =>
			dispatch(fireCurrentWeatherHttpRequest(key)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedWeather);
