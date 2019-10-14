import {
	SearchResult,
	SEARCH_REQUEST_INIT,
	SEARCH_REQUEST_SUCCESS,
	SEARCH_REQUEST_FAIL,
	SearchResultActionTypes,
} from './types';

const INITIAL_STATE: SearchResult = {
	isLoading: false,
	error: '',
	key: '',
	type: '',
	localizedName: '',
};

const searchReducer = (
	state = INITIAL_STATE,
	action: SearchResultActionTypes
): SearchResult => {
	switch (action.type) {
		case SEARCH_REQUEST_INIT:
			return { ...state, isLoading: true, error: '' };
		case SEARCH_REQUEST_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: '',
				key: action.results.key,
				type: action.results.type,
				localizedName: action.results.localizedName,
			};
		case SEARCH_REQUEST_FAIL:
			return {
				...state,
				error: action.error,
				isLoading: false,
				key: '',
				type: '',
				localizedName: '',
			};
		default:
			return state;
	}
};

export default searchReducer;
