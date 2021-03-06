import {
	favortiesInitState,
	INIT_FAVORITES,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	FAVORITE_WEATHER_DATA_INIT,
	GET_FAVORITES_WEATHER_DATA,
	favoritesActionTypes,
} from './types';

const INIT_STATE: favortiesInitState = {
	isLoading: false,
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
				isLoading: false,
				favoritesList: action.localStorageList,
				weatherData: [],
			};

		case ADD_TO_FAVORITES:
			return {
				...state,
				isLoading: false,
				favoritesList: action.updatedAditions,
				weatherData: state.weatherData,
			};

		case REMOVE_FROM_FAVORITES:
			return {
				...state,
				isLoading: false,
				favoritesList: action.updatedRemovals,
				weatherData: state.weatherData,
			};

		case FAVORITE_WEATHER_DATA_INIT:
			return {
				...state,
				isLoading: true,
				favoritesList: [],
				weatherData: [],
			};

		case GET_FAVORITES_WEATHER_DATA:
			return {
				...state,
				isLoading: false,
				favoritesList: state.favoritesList,
				weatherData: [
					...state.weatherData,
					action.favoritesWeatherData,
				],
			};

		default:
			return {
				...state,
			};
	}
};

export default favoritesReducer;
