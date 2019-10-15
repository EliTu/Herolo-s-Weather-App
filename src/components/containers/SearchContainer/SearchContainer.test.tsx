import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SearchContainer } from './SearchContainer';

describe('SearchContainer Component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<SearchContainer />)));

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('SearchContainerStyles');
	});

	it('should render an Input component without errors', () => {
		expect(component.find('Input').length).toBe(1);
	});
});
