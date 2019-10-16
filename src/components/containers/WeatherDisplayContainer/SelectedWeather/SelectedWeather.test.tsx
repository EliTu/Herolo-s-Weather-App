import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SelectedWeather } from './SelectedWeather';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('SelectedWeather Component', () => {
	let component: ShallowWrapper;
	beforeEach(
		() =>
			(component = shallow(
				<SelectedWeather
					currentWeatherHttpRequest={() => {}}
					weatherData={{
						WeatherText: 'abc',
						isDayTime: false,
						Link: 'www',
						Temperature: { Metric: { Value: 20, Unit: 'C' } },
					}}
					isLoading={false}
					searchResults={{ localizedName: 'abc' }}
				/>
			))
	);

	it('should render without errors', () =>
		initialShallowRender(component, '.SelectedWeatherStyles'));

	it('should render a div element with the data info if isLoading is false', () => {
		expect(component.children().find('div')).toBeTruthy();
		expect(component.children().children().length).toBe(4);
	});

	it('should render an Icon component if isLoading is false', () => {
		const icon = component
			.children()
			.children()
			.at(0);

		expect(icon.length).toBe(1);
	});

	it('should render a ul component with 2 li elements', () => {
		const ul = component
			.children()
			.children()
			.at(1);
		const li = ul.children();

		expect(ul.length).toBe(1);
		expect(li.length).toBe(2);
	});

	it('should render a p tag with a text', () => {
		const pTag = component.find('p');

		expect(pTag.length).toBe(1);
		expect(pTag.text()).toBe('abc');
	});

	it('should have a button with a FavIcon component inside', () => {
		const button = component.find('button');
		const favIcon = button.children();

		expect(button.length).toBe(1);
		expect(favIcon.length).toBe(1);
	});
});
