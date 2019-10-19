// Current weather types:
export interface favortiesInitState {
	isLoading: boolean;
	favoritesList: { key: string; cityName: string; countryName: string }[];
	weatherData: {
		key: string;
		cityName: string;
		countryName: string;
		WeatherText: string;
		Temperature: { Metric: { Value: number; Unit: string } };
	}[];
}

export const INIT_FAVORITES = 'INIT_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const FAVORITE_WEATHER_DATA_INIT = 'FAVORITE_WEATHER_DATA_INIT';
export const GET_FAVORITES_WEATHER_DATA = 'GET_FAVORITES_WEATHER_DATA';

interface initFavoritesAction {
	type: typeof INIT_FAVORITES;
	localStorageList: { key: string; cityName: string; countryName: string }[];
}

interface addToFavoritesAction {
	type: typeof ADD_TO_FAVORITES;
	updatedAditions: { key: string; cityName: string; countryName: string }[];
}

interface removeFromFavorites {
	type: typeof REMOVE_FROM_FAVORITES;
	updatedRemovals: { key: string; cityName: string; countryName: string }[];
}

interface favoriteWeatherDataInitAction {
	type: typeof FAVORITE_WEATHER_DATA_INIT;
}

interface getFavoritesWEatherDataAction {
	type: typeof GET_FAVORITES_WEATHER_DATA;
	favoritesWeatherData: {
		key: string;
		cityName: string;
		countryName: string;
		WeatherText: string;
		Temperature: { Metric: { Value: number; Unit: string } };
	};
}

export type favoritesActionTypes =
	| initFavoritesAction
	| addToFavoritesAction
	| removeFromFavorites
	| favoriteWeatherDataInitAction
	| getFavoritesWEatherDataAction;
