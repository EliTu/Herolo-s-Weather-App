import {
	CurrentWeatherInitState,
	CURRENT_WEATHER_INIT,
	CURRENT_WEATHER_SUCCESS,
	CURRENT_WEATHER_FAIL,
	CurrentWeatherActionTypes,
} from './types';

const INITIAL_STATE: CurrentWeatherInitState = {
	resultList: [],
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
				resultList: [],
			};
		case CURRENT_WEATHER_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: '',
				resultList: [...action.weatherResults],
			};
		case CURRENT_WEATHER_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.error,
				resultList: [],
			};
		default:
			return state;
	}
};

export default currentWeatherReducer;
