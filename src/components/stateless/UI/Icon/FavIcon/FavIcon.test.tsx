import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FavIcon from './FavIcon';

describe('FavIcon component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<FavIcon />)));

	it('should render without issues', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});

	it('should have 2 FontAwesome Icons inside the span', () => {
		const faIcon = component.find('FontAwesomeIcon');

		expect(faIcon.length).toBe(2);
	});
});
