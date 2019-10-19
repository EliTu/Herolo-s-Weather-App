import favoritesReducer from './favoritesReducer';
import {
	INIT_FAVORITES,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	FAVORITE_WEATHER_DATA_INIT,
	GET_FAVORITES_WEATHER_DATA,
} from './types';

describe('favoritesReducer', () => {
	it('should return the favoritesList appended to the localStorage when receiving INIT_FAVORITES', () => {
		expect(
			favoritesReducer(undefined, {
				type: INIT_FAVORITES,
				localStorageList: [
					{ key: '123', cityName: 'abc', countryName: 'cbd' },
				],
			})
		).toEqual({
			favoritesList: [
				{ key: '123', cityName: 'abc', countryName: 'cbd' },
			],
			isLoading: false,
			weatherData: [],
		});
	});

	it('should return a new favorties list containing the added favorite item when receiving ADD_TO_FAVORITES action', () => {
		expect(
			favoritesReducer(undefined, {
				type: ADD_TO_FAVORITES,
				updatedAditions: [
					{ key: '321', cityName: 'berlin', countryName: 'germany' },
				],
			})
		).toEqual({
			favoritesList: [
				{ key: '123', cityName: 'abc', countryName: 'cbd' },
				{ key: '321', cityName: 'berlin', countryName: 'germany' },
			],
		});
	});

	it('should return a new favorites list without the removed element from the previous list when receiving REMOVE_FROM_FAVORITES action', () => {
		expect(
			favoritesReducer(undefined, {
				type: REMOVE_FROM_FAVORITES,
				updatedRemovals: [
					{ key: '321', cityName: 'berlin', countryName: 'germany' },
				],
			})
		).toEqual({
			favoritesList: [
				{ key: '321', cityName: 'berlin', countryName: 'germany' },
			],
		});
	});

	it('should set isLoading to true and nullify the favoritesList and weatherData states when receiving FAVORITE_WEATHER_DATA_INIT action', () => {
		expect(
			favoritesReducer(undefined, {
				type: FAVORITE_WEATHER_DATA_INIT,
			})
		).toEqual({
			isLoading: true,
			FavoritesList: [],
			weatherData: [],
		});
	});

	it('should set new weatherData state when receiving GET_FAVORITES_WEATHER_DATA action', () => {
		expect(
			favoritesReducer(undefined, {
				type: GET_FAVORITES_WEATHER_DATA,
				favoritesWeatherData: {
					key: '123',
					cityName: 'hamburg',
					countryName: 'germany',
					WeatherText: 'sunny',
					Temperature: { Metric: { Value: 20, Unit: 'c' } },
				},
			})
		).toEqual({
			isLoading: false,
			favoritesList: [],
			weatherData: [
				{
					key: '123',
					cityName: 'hamburg',
					countryName: 'germany',
					WeatherText: 'sunny',
					Temperature: { Metric: { Value: 20, Unit: 'c' } },
				},
			],
		});
	});
});
