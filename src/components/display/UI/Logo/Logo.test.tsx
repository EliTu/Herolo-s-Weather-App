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

	it('should render one span tag with a text', () => {
		const span = component.children().find('span');

		expect(span.length).toBe(1);
		expect(span.text()).toBe('Herolo Weather app!');
	});

	it('should render one img tag, containing a logo (currently a div for testing)', () => {
		const div = component.children().find('div');

		expect(div.length).toBe(1);
		expect(div).toHaveClassName('testDiv');
	});
});
