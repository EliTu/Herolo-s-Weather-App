import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Loader from './Loader';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('Loader component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<Loader />)));

	it('should render without errors', () => {
		initialShallowRender(component, 'Loader');
	});
});
