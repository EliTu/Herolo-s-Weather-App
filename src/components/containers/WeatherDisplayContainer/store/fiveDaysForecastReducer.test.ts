import fiveDaysForecastReducer from './fiveDaysForecastReducer';
import {
	FIVE_DAYS_FORECAST_INIT,
	FIVE_DAYS_FORECAST_SUCCESS,
	FIVE_DAYS_FORECAST_FAIL,
} from './types';

describe('fiveDaysForecastReducer', () => {
	it('should only set isLoading to true when receiving FIVE_DAYS_FORECAST_INIT action type ', () => {
		expect(
			fiveDaysForecastReducer(undefined, {
				type: FIVE_DAYS_FORECAST_INIT,
			})
		).toEqual({
			isLoading: true,
			error: '',
			resultList: [],
		});
	});

	it('should set isLoading to false, nullify error, and get values for the rest of the state properties when receiving CURRENT_WEATHER_SUCCESS', () => {
		expect(
			fiveDaysForecastReducer(undefined, {
				type: FIVE_DAYS_FORECAST_SUCCESS,
				fiveDaysForecastResults: [{}, {}, {}, {}, {}],
			})
		).toEqual({
			isLoading: false,
			error: '',
			resultList: [{}, {}, {}, {}, {}],
		});
	});

	it('should set isLoading to false, set an error and nullify the rest of the state propertoes when receiving CURRENT_WEATHER_FAIL', () => {
		expect(
			fiveDaysForecastReducer(undefined, {
				type: FIVE_DAYS_FORECAST_FAIL,
				error: 'abcd',
			})
		).toEqual({
			isLoading: false,
			error: 'abcd',
			resultList: [],
		});
	});
});
