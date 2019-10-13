import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import WeatherDisplayContainer from './WeatherDIsplayContainer';

describe('WeatherDisplayContainer', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<WeatherDisplayContainer />)));

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('WeatherDisplayContainerStyles');
	});
});
