import React from 'react';
import styles from './FiveDaysForecast.module.css';

interface IProps {}

const FiveDaysForecast: React.FC<IProps> = () => {
	const { FiveDaysForecastStyles } = styles;

	return <div className={FiveDaysForecastStyles}></div>;
};

export default FiveDaysForecast;
