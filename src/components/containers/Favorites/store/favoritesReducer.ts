import {
	favortiesInitState,
	INIT_FAVORITES,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	GET_FAVORITES_WEATHER_DATA,
	favoritesActionTypes,
} from './types';

const INIT_STATE: favortiesInitState = {
	favoritesList: [],
	weatherData: [],
};

const favoritesReducer = (
	state = INIT_STATE,
	action: favoritesActionTypes
): favortiesInitState => {
	switch (action.type) {
		case INIT_FAVORITES:
			return {
				...state,
				favoritesList: action.localStorageList,
			};

		case ADD_TO_FAVORITES:
			return {
				...state,
				favoritesList: state.favoritesList.concat(
					action.updatedAditions
				),
			};

		case REMOVE_FROM_FAVORITES:
			return {
				...state,
				favoritesList: action.updatedRemovals,
			};

		case GET_FAVORITES_WEATHER_DATA:
			return {
				...state,
				weatherData: action.favoritesWeatherData,
			};

		default:
			return {
				...state,
			};
	}
};

export default favoritesReducer;
