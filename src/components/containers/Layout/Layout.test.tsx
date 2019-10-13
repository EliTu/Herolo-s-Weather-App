import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Layout from './Layout';
import Backdrop from '../../stateless/UI/Backdrop/Backdrop';

describe('Layout component', () => {
	let component: ShallowWrapper;

	beforeEach(() => {
		component = shallow(<Layout />);
	});

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('LayoutStyles');
	});

	it('should render the Backdrop component without errors', () => {
		expect(component).toContainReact(<Backdrop isDisplayed />);
	});

	it('should render a main tag that contains the children prop', () => {
		const main = component.find('main');

		expect(main.length).toBe(1);
		expect(main.children()).toBeTruthy();
	});
});
