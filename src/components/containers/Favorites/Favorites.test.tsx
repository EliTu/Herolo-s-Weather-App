import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Favorites } from './Favorites';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('Favorites component', () => {
	let component: ShallowWrapper;
	beforeEach(
		() => (component = shallow(<Favorites isLoading={false} error={''} />))
	);

	it('should render without errors', () => {
		initialShallowRender(component, 'FavoritesStyles');
	});

	it('should not display the component if isLoading is true or error is truthy', () => {
		component.setProps({ isLoading: true });

		expect(component).toMatchSnapshot();
		expect(component.children().length).toBe(0);
		expect(component.children()).not.toExist();

		component.setProps({ isLoading: false, error: 'abc' });
		expect(component).toMatchSnapshot();
		expect(component.children().length).toBe(0);
		expect(component.children()).not.toExist();
	});
});
