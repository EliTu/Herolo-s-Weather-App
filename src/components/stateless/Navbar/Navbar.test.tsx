import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Navbar from './Navbar';
import NavItems from './NavItems/NavItems';
import Logo from '../UI/Logo/Logo';
import '../../../setupTests';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('Navbar component', () => {
	let component: ShallowWrapper;
	beforeEach(() => {
		component = shallow(<Navbar />);
	});

	it('should render without errors', () =>
		initialShallowRender(component, '.NavbarStyles'));

	it('should render Logo and NavItems without errors', () => {
		expect(component.children().length).toBe(2);
		expect(component).toContainReact(<NavItems />);
		expect(component).toContainReact(<Logo />);
	});
});
