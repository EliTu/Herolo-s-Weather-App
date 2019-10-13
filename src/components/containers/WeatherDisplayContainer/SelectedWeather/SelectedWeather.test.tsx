import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SelectedWeather from './SelectedWeather';

describe('SelectedWeather Component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<SelectedWeather />)));

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('SelectedWeatherStyles');
	});
});
