import React from 'react';
import styles from './WeatherDisplayContainer.module.css';

const WeatherDIsplayContainer: React.FC = () => {
	const { weatherDisplayCOntainerStyles } = styles;
	return <section className={weatherDisplayCOntainerStyles}></section>;
};

export default WeatherDIsplayContainer;
