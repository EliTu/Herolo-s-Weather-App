import React from 'react';
import { connect } from 'react-redux';
import SelectedWeather from './SelectedWeather/SelectedWeather';
import FiveDaysForecast from './FiveDaysForecast/FiveDaysForecast';
import ErrorMessage from '../../display/UI/ErrorMessage/ErrorMessage';
import Loader from '../../display/UI/Loader/Loader';
import styles from './WeatherDisplayContainer.module.css';

interface IProps {
	isCurrentWeatherLoading: boolean;
	weatherError?: string;
	isFiveDaysForecastLoading: boolean;
	fiveDaysForecastError?: string;
}

export const WeatherDisplayContainer: React.FC<IProps> = ({
	isCurrentWeatherLoading,
	weatherError,
	isFiveDaysForecastLoading,
	fiveDaysForecastError,
}) => {
	const { WeatherDisplayContainerStyles } = styles;

	const errorDetails = weatherError ? weatherError : fiveDaysForecastError;

	return (
		<section className={WeatherDisplayContainerStyles}>
			{!isCurrentWeatherLoading && !isFiveDaysForecastLoading ? (
				<>
					{!weatherError && !fiveDaysForecastError ? (
						<>
							<SelectedWeather />
							<FiveDaysForecast />
						</>
					) : (
						<ErrorMessage errorDetails={errorDetails} />
					)}
				</>
			) : (
				<Loader />
			)}
		</section>
	);
};

// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		isCurrentWeatherLoading: state.currentWeather.isLoading,
		weatherError: state.currentWeather.error,
		isFiveDaysForecastLoading: state.fiveDaysForecast.isLoading,
		FiveDaysForecastError: state.fiveDaysForecast.error,
	};
};

export default connect(mapStateToProps)(WeatherDisplayContainer);
