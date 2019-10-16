import {
	CurrentWeatherInitState,
	CURRENT_WEATHER_INIT,
	CURRENT_WEATHER_SUCCESS,
	CURRENT_WEATHER_FAIL,
	CurrentWeatherActionTypes,
} from './types';

const INITIAL_STATE: CurrentWeatherInitState = {
	selectedResult: [],
	error: '',
	isLoading: false,
};

const currentWeatherReducer = (
	state = INITIAL_STATE,
	action: CurrentWeatherActionTypes
): CurrentWeatherInitState => {
	switch (action.type) {
		case CURRENT_WEATHER_INIT:
			return {
				...state,
				isLoading: true,
				error: '',
				selectedResult: [],
			};
		case CURRENT_WEATHER_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: '',
				selectedResult: action.weatherResults,
			};
		case CURRENT_WEATHER_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.error,
				selectedResult: [],
			};
		default:
			return state;
	}
};

export default currentWeatherReducer;
