import React from 'react';
import { connect } from 'react-redux';
import SelectedWeather from './SelectedWeather/SelectedWeather';
import FiveDaysForecast from './FiveDaysForecast/FiveDaysForecast';
import styles from './WeatherDisplayContainer.module.css';

interface IProps {
	weatherError: string;
	FiveDaysForecastError: string;
}

export const WeatherDisplayContainer: React.FC<IProps> = ({
	weatherError,
	FiveDaysForecastError,
}) => {
	const { WeatherDisplayContainerStyles } = styles;
	return (
		<section className={WeatherDisplayContainerStyles}>
			<SelectedWeather />
			<FiveDaysForecast />
		</section>
	);
};

// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		weatherError: state.currentWeather.error,
		FiveDaysForecastError: state.fiveDaysForecast.error,
	};
};

export default connect(mapStateToProps)(WeatherDisplayContainer);
