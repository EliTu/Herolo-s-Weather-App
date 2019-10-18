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
					currentWeatherHttpRequest={(
						val: string,
						cityName: string,
						countryName: string
					) => {}}
					weatherData={{
						LocalObservationDateTime: '2019-10-18T13:45:00+03:00',
						EpochTime: 12332022240,
						WeatherText: 'warm',
						WeatherIcon: 1,
						IsDayTime: true,
						Link: 'www',
						Temperature: { Metric: { Value: 20, Unit: 'C' } },
						id: 'abc123',
						cityName: 'Tel-Aviv',
						countryName: 'Israel',
					}}
					isLoading={false}
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
		expect(pTag.text()).toBe('warm');
	});

	it('should have a button with a FavIcon component inside', () => {
		const button = component.find('button');
		const favIcon = button.children();

		expect(button.length).toBe(1);
		expect(favIcon.length).toBe(1);
	});
});
