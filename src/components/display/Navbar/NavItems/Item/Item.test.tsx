import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Item from './Item';
import '../../../../../setupTests';
import initialShallowRender from '../../../../../utilities/test-utilities/initialShallowRender';

describe('Item component', () => {
	let component: ShallowWrapper;
	beforeEach(() => {
		component = shallow(<Item link="/s">Test Item</Item>);
	});

	it('should render without errors', () =>
		initialShallowRender(component, '.ItemStyles'));

	it('should render a children prop with a type of string without errors', () => {
		expect(component.children().text()).toBe('Test Item');
	});
});
