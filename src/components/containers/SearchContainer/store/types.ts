export interface SearchResult {
	key: string;
	type: string;
	localizedName: string;
}

export const SEARCH_REQUEST_INIT = 'SEARCH_REQUEST_INIT';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_FAIL = 'SEARCH_REQUEST_FAIL';
