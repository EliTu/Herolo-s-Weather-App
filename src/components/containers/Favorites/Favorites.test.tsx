import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Favorites from './Favorites';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('Favorites component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<Favorites />)));

	it('should render without errors', () => {
		initialShallowRender(component, 'FavoritesStyles');
	});
});
