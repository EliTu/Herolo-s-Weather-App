import React, { ReactElement } from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar component', () => {
	let component: ReactElement;
	beforeEach(() => (component = shallow(<Navbar />)));

	it('should render without errors', () => {
		expect(component).toMatchInlineSnapshot();
		expect(component).toBeTruthy();
	});
});
