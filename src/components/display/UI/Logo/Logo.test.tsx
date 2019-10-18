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
		const pTag = component.find('p');

		expect(pTag.length).toBe(2);
		expect(pTag.at(0).text()).toBe("Herolo's");
		expect(pTag.at(1).text()).toBe('Weather app');
	});

	it('should render one img tag, containing a logo', () => {
		const logo = component.find('svg');

		expect(logo.length).toBe(1);
	});
});
