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
					history={{ push: () => {} }}
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
});
