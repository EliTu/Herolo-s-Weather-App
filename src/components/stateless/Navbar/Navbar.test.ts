import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Navbar />);
	});

	it('should render without errors', () => {
		expect(component).toMatchInlineSnapshot();
		expect(component.length).toBe(1);
		expect(component).toBeTruthy();
	});
});
