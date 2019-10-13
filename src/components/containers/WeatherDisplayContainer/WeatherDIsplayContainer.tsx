import React from 'react';
import SelectedWeather from './SelectedWeather/SelectedWeather';
import styles from './WeatherDisplayContainer.module.css';

const WeatherDIsplayContainer: React.FC = () => {
	const { WeatherDisplayContainerStyles } = styles;
	return (
		<section className={WeatherDisplayContainerStyles}>
			<SelectedWeather />
		</section>
	);
};

export default WeatherDIsplayContainer;
