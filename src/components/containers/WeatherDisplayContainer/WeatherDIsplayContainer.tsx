import React from 'react';
import { connect } from 'react-redux';
import SelectedWeather from './SelectedWeather/SelectedWeather';
import FiveDaysForecast from './FiveDaysForecast/FiveDaysForecast';
import ErrorMessage from '../../display/UI/ErrorMessage/ErrorMessage';
import styles from './WeatherDisplayContainer.module.css';

interface IProps {
	searchError: string;
	weatherError: string;
	fiveDaysForecastError: string;
}

export const WeatherDisplayContainer: React.FC<IProps> = ({
	searchError,
	weatherError,
	fiveDaysForecastError,
}) => {
	const { WeatherDisplayContainerStyles } = styles;
	return (
		{
			!searchError && !weatherError && !fiveDaysForecastError ? <section className={WeatherDisplayContainerStyles}>
			<SelectedWeather />
			<FiveDaysForecast />
		</section>: <ErrorMessage/>
	}
	);
};

// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		searchError: state.search.error,
		weatherError: state.currentWeather.error,
		FiveDaysForecastError: state.fiveDaysForecast.error,
	};
};

export default connect(mapStateToProps)(WeatherDisplayContainer);
