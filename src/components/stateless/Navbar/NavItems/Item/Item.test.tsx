import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';
import '../../../../../setupTests';

describe('Item component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Item>Test Item</Item>);
	});

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('ItemStyles');
	});

	it('should render a children prop with a type of string without errors', () => {
		expect(component.children().text()).toBe('Test Item');
	});
});
