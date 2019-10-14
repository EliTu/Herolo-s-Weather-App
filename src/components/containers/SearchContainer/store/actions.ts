import {
	SearchResult,
	SEARCH_REQUEST_INIT,
	SEARCH_REQUEST_SUCCESS,
	SEARCH_REQUEST_FAIL,
	SearchResultActionTypes,
} from './types';
import { Action, ActionCreator, Dispatch, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export const searchRequestInit: ActionCreator<
	Action
> = (): SearchResultActionTypes => {
	return {
		type: SEARCH_REQUEST_INIT,
	};
};

export const searchRequestSuccess: ActionCreator<Action> = (
	searchResults: SearchResult
): SearchResultActionTypes => {
	return {
		type: SEARCH_REQUEST_SUCCESS,
		results: searchResults,
	};
};

export const searchRequestFail: ActionCreator<Action> = (
	error: string
): SearchResultActionTypes => {
	return {
		type: SEARCH_REQUEST_FAIL,
		error: error,
	};
};

// Thunk action creator:
export const fireSearchHttpRequest = (searchInputValue: string) => {
	return async (dispatch: any) => {
		dispatch(searchRequestInit());
		try {
			const url: string =
				'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
			const apiKey: string = '0Gub8jwlpiFGj7JYWAu9h9cGby8MnSAz';
			const params: string = `?apikey=${apiKey}&q=${searchInputValue}&language=en-us HTTP/1.1`;

			const data = await axios.get(`${url}${params}`);

			console.log(data);
		} catch (error) {
			console.log(error);
			dispatch(searchRequestFail(error.message));
		}
	};
};
