// Current weather types:
export interface CurrentWeatherInitState {
	selectedResult: {}[];
	error?: string;
	isLoading?: boolean;
}

export const CURRENT_WEATHER_INIT = 'CURRENT_WEATHER_INIT';
export const CURRENT_WEATHER_SUCCESS = 'CURRENT_WEATHER_SUCCESS';
export const CURRENT_WEATHER_FAIL = 'CURRENT_WEATHER_FAIL';

interface currentWeatherInitAction {
	type: typeof CURRENT_WEATHER_INIT;
}

interface currentWeatherSuccessAction {
	type: typeof CURRENT_WEATHER_SUCCESS;
	weatherResults: {}[];
}

interface currentWeatherFailAction {
	type: typeof CURRENT_WEATHER_FAIL;
	error: string;
}

export type CurrentWeatherActionTypes =
	| currentWeatherInitAction
	| currentWeatherSuccessAction
	| currentWeatherFailAction;

// FiveDaysWeather types:
export interface FiveDaysForecastInitState {
	resultList: {}[];
	error?: string;
	isLoading: boolean;
}

export const FIVE_DAYS_FORECAST_INIT = 'FIVE_DAYS_FORECAST_INIT';
export const FIVE_DAYS_FORECAST_SUCCESS = 'FIVE_DAYS_FORECAST_SUCCESS';
export const FIVE_DAYS_FORECAST_FAIL = 'FIVE_DAYS_FORECAST_FAIL';

interface fiveDaysForecastInitAction {
	type: typeof FIVE_DAYS_FORECAST_INIT;
}

interface fiveDaysForecastSuccessAction {
	type: typeof FIVE_DAYS_FORECAST_SUCCESS;
	fiveDaysForecastResults: any;
}

interface fiveDaysForecastFailAction {
	type: typeof FIVE_DAYS_FORECAST_FAIL;
	error: string;
}

export type FiveDaysForecastActionTypes =
	| fiveDaysForecastInitAction
	| fiveDaysForecastSuccessAction
	| fiveDaysForecastFailAction;
