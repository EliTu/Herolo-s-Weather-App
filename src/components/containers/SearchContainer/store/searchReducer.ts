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
			return { ...state, ...payload };
		case SEARCH_REQUEST_SUCCESS:
			return { ...state, ...payload };
		case SEARCH_REQUEST_FAIL:
			return { ...state, ...payload };
		default:
			return state;
	}
};

export default searchReducer;
