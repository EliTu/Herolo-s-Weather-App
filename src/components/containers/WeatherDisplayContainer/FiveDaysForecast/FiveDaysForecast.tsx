import React from 'react';
import styles from './FiveDaysWeather.module.css';

interface IProps {}

const FiveDaysForecast: React.FC<IProps> = () => {
    const { FiveDaysWeatherStyles: FiveDaysForecastStyles } = styles;
    
	return <div className={FiveDaysForecastStyles}></div>;
};

export default FiveDaysForecast;
