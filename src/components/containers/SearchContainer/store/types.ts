import { SearchResult } from './types';

export interface SearchResult {
	isLoading: boolean;
	key: string;
	type: string;
	localizedName: string;
}

export const SEARCH_REQUEST_INIT = 'SEARCH_REQUEST_INIT';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_FAIL = 'SEARCH_REQUEST_FAIL';

interface SearchRequestInitAction {
	type: typeof SEARCH_REQUEST_INIT;
	action: any;
}

interface SearchRequestSuccessAction {
	type: typeof SEARCH_REQUEST_SUCCESS;
	action: SearchResult;
}

interface SearchRequestFail {
	type: typeof SEARCH_REQUEST_FAIL;
	action: any;
}

export type SearchResultActionTypes =
	| SearchRequestInitAction
	| SearchRequestSuccessAction
	| SearchRequestFail;
