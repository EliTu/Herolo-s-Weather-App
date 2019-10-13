import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<Button>abc</Button>)));

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('ButtonStyles');
	});

	it('should render children props with a string type', () => {
		expect(component.children().text()).toBe('abc');
	});
});
