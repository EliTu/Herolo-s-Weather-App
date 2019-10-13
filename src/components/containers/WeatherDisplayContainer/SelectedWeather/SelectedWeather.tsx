import React from 'react';
import styles from './SelectedWeather.module.css';

const SelectedWeather: React.FC = () => {
	const { SelectedWeatherStyles, testDiv } = styles;
	return (
		<div className={SelectedWeatherStyles}>
			<div className={testDiv}>Img</div>
			<p>Current weather forcast</p>
		</div>
	);
};

export default SelectedWeather;
