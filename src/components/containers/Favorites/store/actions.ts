import {
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	favoritesActionTypes,
} from './types';
import { Action, ActionCreator } from 'redux';

export const addToFavoritesAction: ActionCreator<Action> = (
	id: string,
	key: string,
	cityName: string,
	countryName: string
): favoritesActionTypes => {
	const newFavorite = [
		{
			id: id,
			key: key,
			cityName: cityName,
			countryName: countryName,
		},
	];

	return {
		type: ADD_TO_FAVORITES,
		updatedAditions: newFavorite,
	};
};

export const removeFromFavorites: ActionCreator<Action> = (
	id: string
): favoritesActionTypes => {
	return {
		type: REMOVE_FROM_FAVORITES,
		id: id,
	};
};
