import {
	INIT_FAVORITES,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	favoritesActionTypes,
} from './types';
import { Action, ActionCreator } from 'redux';

export const initFavoritesAction: ActionCreator<
	Action
> = (): favoritesActionTypes => {
	// If there isn't any favKeyList in localStorage, then init it:
	if (!localStorage.favKeyList)
		localStorage.setItem('favKeyList', JSON.stringify([]));

	// Check localStorage for the favKeyList key, if available get the list and parse it back to an array:
	let favList;
	favList = JSON.parse(localStorage.getItem('favKeyList')!) || [];

	if (favList) console.log(favList);
	return {
		type: INIT_FAVORITES,
		localStorageList: favList,
	};
};

export const addToFavoritesAction: ActionCreator<Action> = (
	key: string
): favoritesActionTypes => {
	// Fetch the current list and parse it, push the new key and set it again, then fetch it:
	const currentFavList =
		JSON.parse(localStorage.getItem('favKeyList')!) || [];

	currentFavList.push(key);
	localStorage.setItem('favKeyList', JSON.stringify(currentFavList));

	const newFavoriteKeyList =
		JSON.parse(localStorage.getItem('favKeyList')!) || [];

	return {
		type: ADD_TO_FAVORITES,
		updatedAditions: newFavoriteKeyList,
	};
};

export const removeFromFavoritesAction: ActionCreator<Action> = (
	key: string
): favoritesActionTypes => {
	// Fetch the current list and parse it, filter the relevant element, set it again then fetch it:
	const currentFavList =
		JSON.parse(localStorage.getItem('favKeyList')!) || [];

	const filteredList = currentFavList.filter(
		(keyString: string) => keyString !== key
	);

	localStorage.setItem('favKeyList', JSON.stringify(filteredList));

	const updatedFavoriteKeyList =
		JSON.parse(localStorage.getItem('favKeyList')!) || [];

	return {
		type: REMOVE_FROM_FAVORITES,
		updatedRemovals: updatedFavoriteKeyList,
	};
};
