import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FavoritesList } from './FavoritesList';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('FavoritesList componenet', () => {
	let component: ShallowWrapper;
	const currentWeatherCallback = jest.fn();
	const fiveDaysForecastCallback = jest.fn();
	beforeEach(
		() =>
			(component = shallow(
				<FavoritesList
					favorites={[
						{
							key: '123',
							cityName: 'munich',
							countryName: 'germany',
						},
					]}
					favoritesWeatherData={[
						{
							key: '123',
							cityName: 'munich',
							countryName: 'germany',
							WeatherText: 'warm',
							Temperature: { Metric: { Value: 23, Unit: 'c' } },
						},
						{
							key: '456',
							cityName: 'germering',
							countryName: 'germany',
							WeatherText: 'warm',
							Temperature: { Metric: { Value: 24, Unit: 'c' } },
						},
					]}
					history={{}}
					getFavoritesWeatherData={() => {}}
					getClickedItemWeatherCurrentData={currentWeatherCallback}
					getClickedItemFiveDaysForecast={fiveDaysForecastCallback}
				/>
			))
	);

	it('should render without errors', () => {
		initialShallowRender(component, 'FavoritesListStyles');
	});

	it('should render a div with the relevant favorite weather data', () => {
		expect(component.children().find('div')).toExist();
		expect(component.children().find('div').length).toBe(2);
	});

	it('should contain Card components inside the wrapping div', () => {
		const card = component
			.children()
			.find('div')
			.children();

		expect(card.length).toBe(2);
		expect(card.at(0)).toContain('Card');
		expect(card.at(1)).toContain('Card');
	});

	it('should call both callback functions upon a click on one of the wrapping divs', () => {
		component
			.children()
			.find('div')
			.at(0)
			.simulate('click');
	});

	expect(currentWeatherCallback).toHaveBeenCalled();
	expect(currentWeatherCallback).toHaveBeenCalledTimes(1);

	expect(fiveDaysForecastCallback).toHaveBeenCalled();
	expect(fiveDaysForecastCallback).toHaveBeenCalledTimes(1);
});
