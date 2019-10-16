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
			resultList: [],
		});
	});

	it('should set isLoading to false, nullify error, and get values for the rest of the state properties when receiving CURRENT_WEATHER_SUCCESS', () => {
		expect(
			currentWeatherReducer(undefined, {
				type: CURRENT_WEATHER_SUCCESS,
				weatherResults: [{}, {}, {}],
			})
		).toEqual({
			isLoading: false,
			error: '',
			resultList: [{}, {}, {}],
		});
	});

	it('should set isLoading to false, set an error and nullify the rest of the state propertoes when receiving CURRENT_WEATHER_FAIL', () => {
		expect(
			currentWeatherReducer(undefined, {
				type: CURRENT_WEATHER_FAIL,
				error: 'abcd',
			})
		).toEqual({
			isLoading: false,
			error: 'abcd',
			resultList: [],
		});
	});
});
