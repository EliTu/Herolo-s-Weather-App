import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PaginationControls from './PaginationControls';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('PaginationControls component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<PaginationControls />)));

	it('should render without errors', () => {
		initialShallowRender(component, 'PaginationControlsStyles');
	});
});
