import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FiveDaysForecast from './';

describe('FiveDaysWeather component', () => {
	let component: ShallowWrapper;
    beforeEach(() => shallow(<FiveDaysForecast />));

	it('should render the component without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('FiveDaysForecastStyles');
	});
});
