// Current weather types:
export interface favortiesInitState {
	favoritesList: {
		id: string;
		key: string;
		cityName: string;
		countryName: string;
	}[];
}

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

interface addToFavoritesAction {
	type: typeof ADD_TO_FAVORITES;
	updatedAditions: {
		id: string;
		key: string;
		cityName: string;
		countryName: string;
	}[];
}

interface removeFromFavorites {
	type: typeof REMOVE_FROM_FAVORITES;
	id: string;
}

export type favoritesActionTypes = addToFavoritesAction | removeFromFavorites;
