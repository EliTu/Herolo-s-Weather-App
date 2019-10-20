import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Favorites } from './Favorites';
import ErrorMessage from '../../display/UI/ErrorMessage/ErrorMessage';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('Favorites component', () => {
	let component: ShallowWrapper;
	beforeEach(
		() =>
			(component = shallow(
				<Favorites
					isLoading={false}
					error={''}
					weatherData={[{}, {}]}
					favorites={[{}, {}]}
				/>
			))
	);

	it('should render without errors', () => {
		initialShallowRender(component, 'FavoritesStyles');
	});

	it('should not display the component if isLoading is true', () => {
		component.setProps({ isLoading: true });

		expect(component).toMatchSnapshot();
		expect(component.find('div').children()).not.toExist();
	});

	it('should display a message if there are no favorite items or weatherData available', () => {
		component.setProps({ weatherData: [{}], favorites: [{}] });

		expect(component).toMatchSnapshot();
		expect(component.text()).toBe(
			'There seems to be no favorite items available to display! Please search for your favorite destinations and press on the ❤ button to add to your favorites list.'
		);
	});

	it('should dispaly the ErrorMessage component if error is truthy', () => {
		component.setProps({ error: 'abc' });
		expect(component).toMatchSnapshot();
		expect(component.children()).toContainReact(
			<ErrorMessage errorDetails={'abc'} />
		);
	});
});
