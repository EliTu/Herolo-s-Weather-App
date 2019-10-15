import searchReducer from './searchReducer';
import {
	SEARCH_REQUEST_INIT,
	SEARCH_REQUEST_SUCCESS,
	SEARCH_REQUEST_FAIL,
} from './types';

describe('searchReducer', () => {
	it('should only set isLoading to true when receiving SEARCH_REQUEST_INIT action type', () => {
		expect(searchReducer(undefined, { type: SEARCH_REQUEST_INIT })).toEqual(
			{
				isLoading: true,
				error: '',
				results: [],
			}
		);
	});

	it('should set key, type and localizedName ,and nullify error and isLoading, when receiving SEARCH_REQUEST_SUCCESS action type', () => {
		expect(
			searchReducer(undefined, {
				type: SEARCH_REQUEST_SUCCESS,
				results: [{}, {}, {}],
			})
		).toEqual({
			isLoading: false,
			error: '',
			results: [{}, {}, {}],
		});
	});

	it('should set error, and nullify the rest of the values, when receiving SEARCH_REQUEST_FAIL action type', () => {
		expect(
			searchReducer(undefined, {
				type: SEARCH_REQUEST_FAIL,
				error: 'abc',
			})
		).toEqual({
			isLoading: false,
			error: 'abc',
			results: [],
		});
	});
});
