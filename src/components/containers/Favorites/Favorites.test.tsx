import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Favorites } from './Favorites';
import ErrorMessage from '../../display/UI/ErrorMessage/ErrorMessage';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('Favorites component', () => {
	let component: ShallowWrapper;
	beforeEach(
		() => (component = shallow(<Favorites isLoading={false} error={''} />))
	);

	it('should render without errors', () => {
		initialShallowRender(component, 'FavoritesStyles');
	});

	it('should not display the component if isLoading is true', () => {
		component.setProps({ isLoading: true });

		expect(component).toMatchSnapshot();
		expect(component.find('div').children()).not.toExist();
	});

	it('should dispaly the ErrorMessage component if error is truthy', () => {
		component.setProps({ error: 'abc' });
		expect(component).toMatchSnapshot();
		expect(component.children()).toContainReact(
			<ErrorMessage errorDetails={'abc'} />
		);
	});
});
