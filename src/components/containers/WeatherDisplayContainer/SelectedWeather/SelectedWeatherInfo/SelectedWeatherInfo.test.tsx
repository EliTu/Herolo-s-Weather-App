import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import initialShallowRender from '../../../../../utilities/test-utilities/initialShallowRender';
import SelectedWeatherInfo from './SelectedWeatherInfo';
import Icon from '../../../../display/UI/Icon/Icon';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

describe('SelectedWeatherInfo', () => {
	let component: ShallowWrapper;
	beforeEach(
		() =>
			(component = shallow(
				<SelectedWeatherInfo
					weatherIconType={faCloud}
					isLoading={false}
					infoLink={'www.something.com'}
					localName={'abc'}
					temperature={{ Metric: { Value: 20, Unit: 'c' } }}
				/>
			))
	);

	it('should render without errors', () => {
		initialShallowRender(component, 'selectedWeatherInfoStyles');
	});

	it('should render an Icon component if isLoading is false', () => {
		const icon = component
			.children()
			.children()
			.at(0);

		expect(icon.length).toBe(1);
	});

	it('should render a ul component with 2 li elements', () => {
		const ul = component.children().at(1);
		const li = ul.children();

		expect(ul.length).toBe(1);
		expect(li.length).toBe(2);
	});
});
