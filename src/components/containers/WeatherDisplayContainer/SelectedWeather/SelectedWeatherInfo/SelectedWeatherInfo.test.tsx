import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import initialShallowRender from '../../../../../utilities/test-utilities/initialShallowRender';
import SelectedWeatherInfo from './SelectedWeatherInfo';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

describe('SelectedWeatherInfo', () => {
	let component: ShallowWrapper;
	beforeEach(
		() =>
			(component = shallow(
				<SelectedWeatherInfo
					weatherIconType={faCloud}
					isLoading={false}
					infoLink={'www.info.com'}
					cityName={'Tel-Aviv'}
					countryName={'Israel'}
					temperature={{ Metric: { Value: 20, Unit: 'C' } }}
					day={'Thursday'}
					date={'02/10/2019'}
				/>
			))
	);

	it('should render without errors', () => {
		initialShallowRender(component, 'SelectedWeatherInfoStyles');
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

	it('first li should display the correct date', () => {
		const li = component.find('li').at(0);

		expect(li.children().length).toBe(2);
		expect(
			li
				.children()
				.at(0)
				.text()
		).toBe('Thursday');
		expect(
			li
				.children()
				.at(1)
				.text()
		).toBe('02/10/2019');
	});

	it('second li should display the correct city & country name', () => {
		const li = component.find('li').at(1);

		expect(li.children().length).toBe(2);
		expect(
			li
				.children()
				.at(0)
				.text()
		).toBe('Tel-Aviv,');
		expect(
			li
				.children()
				.at(1)
				.text()
		).toBe('Israel');
	});
});
