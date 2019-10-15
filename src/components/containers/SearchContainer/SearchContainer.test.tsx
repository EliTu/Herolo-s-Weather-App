import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SearchContainer } from './SearchContainer';
import Input from '../../display/UI/Input/Input';
import Icon from '../../display/UI/Icon/Icon';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('SearchContainer Component', () => {
	let component: ShallowWrapper;
	beforeEach(
		() => (component = shallow(<SearchContainer httpRequest={() => {}} />))
	);

	it('should render without errors', () =>
		initialShallowRender(component, '.SearchContainerStyles'));

	it('should render a div wrapper that contains an Input and an Icon components', () => {
		expect(component.children().find('div').length).toBe(1);

		expect(component.children().find(Input)).toExist();
		expect(component.children().find(Input).length).toBe(1);

		expect(component.children().find(Icon)).toExist();
		expect(component.children().find(Icon).length).toBe(1);
	});
});
