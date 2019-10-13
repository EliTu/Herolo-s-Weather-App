import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Navbar from './Navbar';
import NavItems from './NavItems/NavItems';
import Logo from '../UI/Logo/Logo';
import '../../../setupTests';

describe('Navbar component', () => {
	let component: ShallowWrapper;
	beforeEach(() => {
		component = shallow(<Navbar />);
	});

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('NavbarStyle');
	});

	it('should render Logo and NavItems without errors', () => {
		expect(component.children().length).toBe(2);
		expect(component).toContainReact(<NavItems />);
		expect(component).toContainReact(<Logo />);
	});
});
