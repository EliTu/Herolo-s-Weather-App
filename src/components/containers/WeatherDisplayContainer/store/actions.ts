import {
	CURRENT_WEATHER_INIT,
	CURRENT_WEATHER_SUCCESS,
	CURRENT_WEATHER_FAIL,
	CurrentWeatherActionTypes,
	FIVE_DAYS_FORECAST_INIT,
	FIVE_DAYS_FORECAST_SUCCESS,
	FIVE_DAYS_FORECAST_FAIL,
	FiveDaysForecastActionTypes,
} from './types';
import { Action, ActionCreator } from 'redux';
import setAsyncGetRequest from '../../../../utilities/urls/urls';

// CurrentWeather actions:
export const currentWeatherInitAction: ActionCreator<
	Action
> = (): CurrentWeatherActionTypes => {
	return {
		type: CURRENT_WEATHER_INIT,
	};
};

export const currentWeatherSuccessAction: ActionCreator<Action> = (
	results: {}[]
): CurrentWeatherActionTypes => {
	return {
		type: CURRENT_WEATHER_SUCCESS,
		weatherResults: results,
	};
};

export const currentWeatherFailAction: ActionCreator<Action> = (
	error: string
): CurrentWeatherActionTypes => {
	return {
		type: CURRENT_WEATHER_FAIL,
		error: error,
	};
};

// Thunk async action creator:
export const fireCurrentWeatherHttpRequest = (key: string) => {
	return async (dispatch: any) => {
		dispatch(currentWeatherInitAction());
		if (key)
			try {
				const result = await setAsyncGetRequest(key, 'currentWeather');
				const weatherResult = result.data[0];

				console.log(weatherResult);

				dispatch(currentWeatherSuccessAction(weatherResult));
			} catch (error) {
				dispatch(currentWeatherFailAction(error));
				console.log(error.message);
			}
	};
};

// FiveDaysForecast actions:
export const fiveDaysForecastInitAction: ActionCreator<
	Action
> = (): FiveDaysForecastActionTypes => {
	return {
		type: FIVE_DAYS_FORECAST_INIT,
	};
};

export const fiveDaysForecastSuccessAction: ActionCreator<Action> = (
	results: {}[]
): FiveDaysForecastActionTypes => {
	return {
		type: FIVE_DAYS_FORECAST_SUCCESS,
		fiveDaysForecastResults: results,
	};
};

export const fiveDaysForecastFailAction: ActionCreator<Action> = (
	error: string
): FiveDaysForecastActionTypes => {
	return {
		type: FIVE_DAYS_FORECAST_FAIL,
		error: error,
	};
};

// Thunk async action creator:
export const fireFiveDaysForecastHttpRequest = (key: string) => {
	return async (dispatch: any) => {
		dispatch(fiveDaysForecastInitAction());
		if (key)
			try {
				const result = await setAsyncGetRequest(
					key,
					'fiveDaysForecast'
				);
				const weatherResult;

				console.log(weatherResult);

				dispatch(fiveDaysForecastSuccessAction(weatherResult));
			} catch (error) {
				dispatch(fiveDaysForecastFailAction(error));
				console.log(error.message);
			}
	};
};
