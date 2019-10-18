import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Logo from './Logo';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('Logo component', () => {
	let component: ShallowWrapper;
	beforeEach(() => {
		component = shallow(<Logo />);
	});

	it('should render without errors', () =>
		initialShallowRender(component, '.LogoStyles'));

	it('should render two p tags with a text', () => {
		const li = component.find('li');

		expect(li.length).toBe(2);
		expect(li.at(0).text()).toBe("Herolo's");
		expect(li.at(1).text()).toBe('Weather app');
	});

	it('should render one img tag, containing a logo', () => {
		const logo = component.find('div').find('svg');

		expect(logo.length).toBe(1);
	});
});
