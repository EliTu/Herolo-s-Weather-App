import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Layout from './Layout';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('Layout component', () => {
	let component: ShallowWrapper;

	beforeEach(() => (component = shallow(<Layout />)));

	it('should render without errors', () =>
		initialShallowRender(component, '.LayoutStyles'));

	it('should render a main tag that contains the children prop', () => {
		const main = component.find('main');

		expect(main.length).toBe(1);
		expect(main.children()).toBeTruthy();
	});
});
