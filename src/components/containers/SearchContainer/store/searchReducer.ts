import {
	SearchInitState,
	SEARCH_REQUEST_INIT,
	SEARCH_REQUEST_SUCCESS,
	SEARCH_REQUEST_FAIL,
	SearchResultActionTypes,
} from './types';

const INITIAL_STATE: SearchInitState = {
	results: [],
	isLoading: false,
	error: '',
};

const searchReducer = (
	state = INITIAL_STATE,
	action: SearchResultActionTypes
): SearchInitState => {
	switch (action.type) {
		case SEARCH_REQUEST_INIT:
			return { ...state, isLoading: true, error: '' };

		case SEARCH_REQUEST_SUCCESS:
			return {
				...state,
				results: [...action.results],
				isLoading: false,
				error: '',
			};
		case SEARCH_REQUEST_FAIL:
			return {
				...state,
				results: [],
				error: action.error,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default searchReducer;
