import {
	SearchInitState,
	SEARCH_REQUEST_INIT,
	SEARCH_REQUEST_SUCCESS,
	SEARCH_REQUEST_FAIL,
	CLOSE_SEARCH_RESULTS,
	SearchResultActionTypes,
} from './types';

const INITIAL_STATE: SearchInitState = {
	results: [],
	isLoading: false,
	error: '',
	areResultsDisplayed: false,
};

const searchReducer = (
	state = INITIAL_STATE,
	action: SearchResultActionTypes
): SearchInitState => {
	switch (action.type) {
		case SEARCH_REQUEST_INIT:
			return {
				...state,
				isLoading: true,
				error: '',
				areResultsDisplayed: false,
			};

		case SEARCH_REQUEST_SUCCESS:
			return {
				...state,
				results: [...action.results],
				isLoading: false,
				areResultsDisplayed: action.results.length > 0,
				error: '',
			};
		case SEARCH_REQUEST_FAIL:
			return {
				...state,
				results: [],
				error: action.error,
				areResultsDisplayed: false,
				isLoading: false,
			};

		case CLOSE_SEARCH_RESULTS:
			return {
				...state,
				areResultsDisplayed: false,
			};
		default:
			return state;
	}
};

export default searchReducer;
