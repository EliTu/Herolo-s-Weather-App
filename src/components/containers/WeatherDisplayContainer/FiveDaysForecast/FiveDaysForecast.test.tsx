import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FiveDaysForecast from './FiveDaysForecast';

describe('FiveDaysWeather component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<FiveDaysForecast />)));

	it('should render the component without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('FiveDaysForecastStyles');
	});
});
