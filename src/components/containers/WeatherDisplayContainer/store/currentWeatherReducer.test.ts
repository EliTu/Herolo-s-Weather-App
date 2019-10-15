import currentWeatherReducer from './currentWeatherReducer';
import {
	CURRENT_WEATHER_INIT,
	CURRENT_WEATHER_SUCCESS,
	CURRENT_WEATHER_FAIL,
} from './types';

describe('currentWeatherReducer', () => {
	it('should only set isLoading to true when receiving CURRENT_WEATHER_INIT action type ', () => {
		expect(
			currentWeatherReducer(undefined, { type: CURRENT_WEATHER_INIT })
		).toEqual({
			isLoading: true,
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
		});
	});

	it('should set isLoading to false, nullify error, and get values for the rest of the state properties', () => {
		expect(
			currentWeatherReducer(undefined, {
				type: CURRENT_WEATHER_SUCCESS,
				weatherResults,
			})
		).toEqual({
			isLoading: false,
			error: '',
			localObservationTime: 'abc',
			weatherText: 'abc',
			weatherIcon: 12,
			realFeelTemp: {},
			humidity: 30,
			isDayTime: false,
			temperatureMetricValue: 1,
			temperatureMetricUnit: 'abc',
			temperatureImperialValue: 2,
			temperatureImperialUnit: 'abcd',
		});
	});
});
