import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SelectedWeather } from './SelectedWeather';
import SelectedWeatherInfo from './SelectedWeatherInfo/SelectedWeatherInfo';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

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

	it('should render the SelectedWeatherInfo if isLoading is false', () => {
		expect(component.children().find('SelectedWeatherInfo')).toBeTruthy();
		expect(component.children().find('SelectedWeatherInfo').length).toBe(1);
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
