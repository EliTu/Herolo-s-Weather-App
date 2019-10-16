export interface SearchInitState {
	results: any;
	isLoading?: boolean;
	error?: string;
	areResultsDisplayed: boolean;
}

export const SEARCH_REQUEST_INIT = 'SEARCH_REQUEST_INIT';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_FAIL = 'SEARCH_REQUEST_FAIL';
export const CLOSE_SEARCH_RESULTS = 'CLOSE_SEARCH_RESULTS';

interface SearchRequestInitAction {
	type: typeof SEARCH_REQUEST_INIT;
}

interface SearchRequestSuccessAction {
	type: typeof SEARCH_REQUEST_SUCCESS;
	results: any;
}

interface SearchRequestFail {
	type: typeof SEARCH_REQUEST_FAIL;
	error: string;
}

interface closeSearchResults {
	type: typeof CLOSE_SEARCH_RESULTS;
}

export type SearchResultActionTypes =
	| SearchRequestInitAction
	| SearchRequestSuccessAction
	| SearchRequestFail
	| closeSearchResults;
