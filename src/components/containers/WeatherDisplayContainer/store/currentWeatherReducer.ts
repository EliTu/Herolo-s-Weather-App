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
	{
		type,
		error,
		localObservationTime,
		weatherText,
		weatherIcon,
		realFeelTemp,
		humidity,
		isDayTime,
		temperatureMetricValue,
		temperatureMetricUnit,
		temperatureImperialValue,
		temperatureImperialUnit,
	}: CurrentWeatherActionTypes
): CurrentWeatherResult => {
	switch (type) {
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
				localObservationTime: localObservationTime,
				weatherText: weatherText,
				weatherIcon: weatherIcon,
				realFeelTemp: realFeelTemp,
				humidity: humidity,
				isDayTime: isDayTime,
				temperatureMetricValue: temperatureMetricValue,
				temperatureMetricUnit: temperatureMetricUnit,
				temperatureImperialValue: temperatureImperialValue,
				temperatureImperialUnit: temperatureImperialUnit,
			};
		case CURRENT_WEATHER_FAIL:
			return { ...state, isLoading: false, error: error };
		default:
			return state;
	}
};

export default currentWeatherReducer;
