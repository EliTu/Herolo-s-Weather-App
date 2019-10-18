import favoritesReducer from './favoritesReducer';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './types';

describe('favoritesReducer', () => {
	it('should return a new favorties list containing the added favorite item when receiving ADD_TO_FAVORITES action', () => {
		expect(
			favoritesReducer(undefined, {
				type: ADD_TO_FAVORITES,
				updatedAditions: [
					{
						id: 'ab12',
						key: '1234',
						cityName: 'madrid',
						countryName: 'spain',
					},
					{
						id: 'cd34',
						key: '12342',
						cityName: 'berlin',
						countryName: 'germany',
					},
				],
			})
		).toEqual({
			favoritesList: [
				{
					id: 'ab12',
					key: '1234',
					cityName: 'madrid',
					countryName: 'spain',
				},
				{
					id: 'cd34',
					key: '12342',
					cityName: 'berlin',
					countryName: 'germany',
				},
			],
		});
	});

	it('should return a new favorites list without the removed element from the previous list when receiving REMOVE_FROM_FAVORITES action', () => {
		expect(
			favoritesReducer(undefined, {
				type: REMOVE_FROM_FAVORITES,
				updatedRemovals: [
					{
						id: 'ab12',
						key: '1234',
						cityName: 'madrid',
						countryName: 'spain',
					},
				],
			})
		).toEqual({
			favoritesList: [
				{
					id: 'ab12',
					key: '1234',
					cityName: 'madrid',
					countryName: 'spain',
				},
			],
		});
	});
});
