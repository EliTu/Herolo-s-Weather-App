import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Icon from './Icon';

describe('Icon component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<Icon />)));

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('IconStyles');
	});
});
