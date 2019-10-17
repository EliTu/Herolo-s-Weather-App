import searchReducer from './searchReducer';
import {
	SEARCH_REQUEST_INIT,
	SEARCH_REQUEST_SUCCESS,
	SEARCH_REQUEST_FAIL,
	CLOSE_SEARCH_RESULTS,
} from './types';

describe('searchReducer', () => {
	it('should only set isLoading to true when receiving SEARCH_REQUEST_INIT action type', () => {
		expect(searchReducer(undefined, { type: SEARCH_REQUEST_INIT })).toEqual(
			{
				isLoading: true,
				error: '',
				results: [],
				areResultsDisplayed: false,
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
			areResultsDisplayed: true,
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
			areResultsDisplayed: false,
		});
	});

	it('should set areResultsDisplayed to false when receiving CLOSE_SEARCH_RESULTS action type', () => {
		expect(
			searchReducer(undefined, {
				type: CLOSE_SEARCH_RESULTS,
			})
		).toEqual({
			results: [],
			error: '',
			areResultsDisplayed: false,
			isLoading: false,
		});
	});
});
