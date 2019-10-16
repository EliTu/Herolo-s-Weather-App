// Current weather types:
export interface CurrentWeatherInitState {
	resultList: {}[];
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
export interface FiveDaysWeatherResult {
	error?: string;
	isLoading: boolean;
	resultList: {
		effectiveDate?: string;
		endDate?: string;
		headLineText: string;
		dailyForcastsDate: string;
		webLink: string;
		mobileLink: string;
		dailyMinTempValue: string;
		dailyMaxTempValue: string;
		dailyMinTempUnitType: number;
		dailyMaxTempUnitType: number;
	};
}

export const FIVE_DAYS_WEATHER_INIT = 'FIVE_DAYS_WEATHER_INIT';
export const FIVE_DAYS_WEATHER_SUCCESS = 'FIVE_DAYS_WEATHER_SUCCESS';
export const FIVE_DAYS_WEATHER_FAIL = 'FIVE_DAYS_WEATHER_FAIL';

interface fiveDaysWeatherInitAction {
	type: typeof FIVE_DAYS_WEATHER_INIT;
}

interface fiveDaysWeatherSuccessAction {
	type: typeof FIVE_DAYS_WEATHER_SUCCESS;
	fiveDaysWeatherResults: any;
}

interface fiveDaysWeatherFailAction {
	type: typeof FIVE_DAYS_WEATHER_FAIL;
	error: string;
}

export type FiveDaysWeatherActionTypes =
	| fiveDaysWeatherInitAction
	| fiveDaysWeatherSuccessAction
	| fiveDaysWeatherFailAction;
