import {
	CURRENT_WEATHER_INIT,
	CURRENT_WEATHER_SUCCESS,
	CURRENT_WEATHER_FAIL,
	CurrentWeatherActionTypes,
} from './types';
import { Action, ActionCreator } from 'redux';
import setAsyncGetRequest from '../../../../utilities/urls/urls';

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
				const currentWeather = result.data[0];

				dispatch(currentWeatherSuccessAction(currentWeather));
			} catch (error) {
				dispatch(currentWeatherFailAction(error));
				console.log(error.message);
			}
	};
};
