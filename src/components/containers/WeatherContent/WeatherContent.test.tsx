import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import WeatherContent from './WeatherContent';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('WeatherContent component', () => {
	let component: ShallowWrapper;
	beforeEach(() => shallow(<WeatherContent />));

	it('should render without errors', () => {
		initialShallowRender(component);
	});

	it('should render the SearchContainer and WeatherDisplayContainer components', () => {
		expect(component.children().length).toBe(2);
		expect(component.children());
	});
});
