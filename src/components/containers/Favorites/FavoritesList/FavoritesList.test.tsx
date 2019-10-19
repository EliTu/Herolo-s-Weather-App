import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FavoritesList } from './FavoritesList';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('FavoritesList componenet', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<FavoritesList />)));

	it('should render without errors', () => {
		initialShallowRender(component, 'FavoritesListStyles');
	});
});
