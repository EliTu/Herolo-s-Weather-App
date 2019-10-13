import React from 'react';
import styles from './SelectedWeather.module.css';

const SelectedWeather: React.FC = () => {
	const { SelectedWeatherStyles } = styles;
	return <div className={SelectedWeatherStyles}></div>;
};

export default SelectedWeather;
