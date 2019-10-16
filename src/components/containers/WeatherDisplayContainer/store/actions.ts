import {
	CurrentWeatherResult,
	CURRENT_WEATHER_INIT,
	CURRENT_WEATHER_SUCCESS,
	CURRENT_WEATHER_FAIL,
	CurrentWeatherActionTypes,
} from './types';
import { Action, ActionCreator } from 'redux';
import axios from 'axios';

export const currentWeatherInitAction: ActionCreator<
	Action
> = (): CurrentWeatherActionTypes => {
	return {
		type: CURRENT_WEATHER_INIT,
	};
};

export const currentWeatherSuccessAction: ActionCreator<Action> = (
	results: CurrentWeatherResult
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
const fireCurrentWeatherHttpRequest = (key: string) => {
	return async (dispatch: any) => {
        dispatch(currentWeatherInitAction());
        try {
        
        } catch (error) {
        
        }
	};
};
