// Current weather types:
export interface favortiesInitState {
	favoritesList: string[];
}

export const INIT_FAVORITES = 'INIT_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

interface initFavoritesAction {
	type: typeof INIT_FAVORITES;
	localStorageList: string[];
}

interface addToFavoritesAction {
	type: typeof ADD_TO_FAVORITES;
	updatedAditions: string[];
}

interface removeFromFavorites {
	type: typeof REMOVE_FROM_FAVORITES;
	updatedRemovals: string[];
}

export type favoritesActionTypes =
	| initFavoritesAction
	| addToFavoritesAction
	| removeFromFavorites;
