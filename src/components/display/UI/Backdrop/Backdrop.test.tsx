import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Backdrop from './Backdrop';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('Backdrop component', () => {
	let component: ShallowWrapper;

	beforeEach(() => {
		component = shallow(<Backdrop isDisplayed />);
	});

	it('should render without errors', () => {
		const div = component.find('div');
		initialShallowRender(div, '.BackdropStyles');
	});

	it('if isDisplayed props is true, should have a div with the className of BackdropStyles', () => {
		const div = component.find('div');

		expect(div.length).toBe(1);
		expect(div).toHaveClassName('BackdropStyles');
	});

	it('if isDisplayed prop is false, should not have a div with the BackdropStyles', () => {
		component.setProps({ isDisplayed: false });
		const div = component.find('div');

		expect(div.length).toBe(0);
		expect(div.length).not.toBe(1);
	});
});
