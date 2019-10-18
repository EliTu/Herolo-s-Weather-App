import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FiveDaysForecast } from './FiveDaysForecast';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';
import ForecastCard from './ForecastCard/ForecastCard';

describe('FiveDaysWeather component', () => {
	let component: ShallowWrapper;
	beforeEach(
		() =>
			(component = shallow(
				<FiveDaysForecast
					forecastResults={[
						{
							EpochDate: 1571371200,
							Date: '10-05-19',
							Minimum: { Value: 20, Unit: 'C' },
							Maximum: { Value: 30, Unit: 'C' },
							Day: { IconPhrase: 'Warm' },
							Link: 'www',
						},
						{
							EpochDate: 1571457600,
							Date: '10-05-19',
							Minimum: { Value: 20, Unit: 'C' },
							Maximum: { Value: 30, Unit: 'C' },
							Day: { IconPhrase: 'Warm' },
							Link: 'www',
						},
						{
							EpochDate: 1571544000,
							Date: '10-05-19',
							Minimum: { Value: 20, Unit: 'C' },
							Maximum: { Value: 30, Unit: 'C' },
							Day: { IconPhrase: 'Warm' },
							Link: 'www',
						},
						{
							EpochDate: 1571630400,
							Date: '10-05-19',
							Minimum: { Value: 20, Unit: 'C' },
							Maximum: { Value: 30, Unit: 'C' },
							Day: { IconPhrase: 'Warm' },
							Link: 'www',
						},
						{
							EpochDate: 1571716800,
							Date: '10-05-19',
							Minimum: { Value: 20, Unit: 'C' },
							Maximum: { Value: 30, Unit: 'C' },
							Day: { IconPhrase: 'Warm' },
							Link: 'www',
						},
					]}
				/>
			))
	);

	it('should render the component without errors', () => {
		initialShallowRender(component, 'FiveDaysForecastStyles');
	});

	it('should render a ul with a list of 5 Card components', () => {
		const ul = component.find('ul');
		const card = component.find('ForecastCard');

		expect(ul.length).toBe(1);
		expect(card).toBeTruthy();
		expect(card.length).toBe(5);
	});
});
