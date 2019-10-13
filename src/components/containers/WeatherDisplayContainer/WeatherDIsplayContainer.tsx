import React from 'react';
import styles from './WeatherDisplayContainer.module.css';

const WeatherDIsplayContainer: React.FC = () => {
	const { WeatherDisplayContainerStyles } = styles;
	return <section className={WeatherDisplayContainerStyles}></section>;
};

export default WeatherDIsplayContainer;
