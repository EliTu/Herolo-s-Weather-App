import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import About from './About';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('About component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<About />)));

	it('should render without errors', () => {
		initialShallowRender(component, 'AboutStyles');
	});
});
