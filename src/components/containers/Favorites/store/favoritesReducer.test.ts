import favoritesReducer from './favoritesReducer';
import {
	INIT_FAVORITES,
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
} from './types';

describe('favoritesReducer', () => {
	it('should return the favoritesList appended to the localStorage when receiving INIT_FAVORITES', () => {
		expect(
			favoritesReducer(undefined, {
				type: INIT_FAVORITES,
				localStorageList: ['123', '456', '789'],
			})
		).toEqual({
			favoritesList: ['123', '456', '789'],
		});
	});

	it('should return a new favorties list containing the added favorite item when receiving ADD_TO_FAVORITES action', () => {
		expect(
			favoritesReducer(undefined, {
				type: ADD_TO_FAVORITES,
				updatedAditions: ['123', '456', '789', '321'],
			})
		).toEqual({
			favoritesList: ['123', '456', '789', '321'],
		});
	});

	it('should return a new favorites list without the removed element from the previous list when receiving REMOVE_FROM_FAVORITES action', () => {
		expect(
			favoritesReducer(undefined, {
				type: REMOVE_FROM_FAVORITES,
				updatedRemovals: ['456', '321'],
			})
		).toEqual({
			favoritesList: ['456', '321'],
		});
	});
});
