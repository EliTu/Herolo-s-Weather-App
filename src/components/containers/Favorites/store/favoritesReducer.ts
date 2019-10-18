import {
	favortiesInitState,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	favoritesActionTypes,
} from './types';

const INIT_STATE: favortiesInitState = {
	favoritesList: [],
};

const favoritesReducer = (state = INIT_STATE, action: favoritesActionTypes) => {
	switch (action.type) {
		case ADD_TO_FAVORITES:
			return {
				...state,
				favoritesList: action.updatedAditions,
			};
		case REMOVE_FROM_FAVORITES:
			return {
				...state,
				favoritesList: action.updatedRemovals,
			};

		default:
			return {
				...state,
			};
	}
};

export default favoritesReducer;
