import {
	CurrentWeatherResult,
	CURRENT_WEATHER_INIT,
	CURRENT_WEATHER_SUCCESS,
	CURRENT_WEATHER_FAIL,
	CurrentWeatherActionTypes,
} from './types';

const INITIAL_STATE: CurrentWeatherResult = {
	error: '',
	localObservationTime: '',
	weatherText: '',
	weatherIcon: 0,
	realFeelTemp: {},
	humidity: 0,
	isDayTime: true,
	temperatureMetricValue: 0,
	temperatureMetricUnit: '',
	temperatureImperialValue: 0,
	temperatureImperialUnit: '',
	isLoading: false,
};

const currentWeatherReducer = (
	state = INITIAL_STATE,
	action: CurrentWeatherActionTypes
): CurrentWeatherResult => {
	switch (action.type) {
		case CURRENT_WEATHER_INIT:
			return {
				...state,
				isLoading: true,
				error: '',
				localObservationTime: '',
				weatherText: '',
				weatherIcon: null,
				realFeelTemp: null,
				humidity: null,
				isDayTime: null,
				temperatureMetricValue: null,
				temperatureMetricUnit: '',
				temperatureImperialValue: null,
				temperatureImperialUnit: '',
			};
		case CURRENT_WEATHER_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: '',
				localObservationTime:
					action.weatherResults.localObservationTime,
				weatherText: action.weatherResults.weatherText,
				weatherIcon: action.weatherResults.weatherIcon,
				realFeelTemp: action.weatherResults.realFeelTemp,
				humidity: action.weatherResults.humidity,
				isDayTime: action.weatherResults.isDayTime,
				temperatureMetricValue:
					action.weatherResults.temperatureMetricValue,
				temperatureMetricUnit:
					action.weatherResults.temperatureMetricUnit,
				temperatureImperialValue:
					action.weatherResults.temperatureImperialValue,
				temperatureImperialUnit:
					action.weatherResults.temperatureImperialUnit,
			};
		case CURRENT_WEATHER_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.error,
				localObservationTime: '',
				weatherText: '',
				weatherIcon: null,
				realFeelTemp: null,
				humidity: null,
				isDayTime: null,
				temperatureMetricValue: null,
				temperatureMetricUnit: '',
				temperatureImperialValue: null,
				temperatureImperialUnit: '',
			};
		default:
			return state;
	}
};

export default currentWeatherReducer;
