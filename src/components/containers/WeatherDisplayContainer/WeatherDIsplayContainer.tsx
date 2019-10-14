import React from 'react';
import SelectedWeather from './SelectedWeather/SelectedWeather';
import FiveDaysForecast from './FiveDaysForecast/FiveDaysForecast';
import styles from './WeatherDisplayContainer.module.css';

const WeatherDIsplayContainer: React.FC = () => {
	const { WeatherDisplayContainerStyles } = styles;
	return (
		<section className={WeatherDisplayContainerStyles}>
			<SelectedWeather />
			<FiveDaysForecast />
		</section>
	);
};

export default WeatherDIsplayContainer;
