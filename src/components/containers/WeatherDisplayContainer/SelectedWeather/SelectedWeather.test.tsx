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

	it('should render an img tag (div for testing), p tag and a favorites icon', () => {
		expect(component.children().length).toBe(3);

		const div = component.children().find('div');
		expect(div).toBeTruthy();
		expect(div).toHaveLength(1);
		expect(div).not.toHaveLength(2);

		const pTag = component.find('p');
		expect(pTag).toBeTruthy();
		expect(pTag).toHaveLength(1);
        expect(pTag).not.toHaveLength(2);
	});
});
