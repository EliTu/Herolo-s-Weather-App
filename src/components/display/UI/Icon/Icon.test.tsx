import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Icon from './Icon';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('Icon component', () => {
	let component: ShallowWrapper;
	beforeEach(
		() => (component = shallow(<Icon iconType={faCoffee} size={'2x'} />))
	);

	it('should render without errors', () =>
		initialShallowRender(component, '.IconStyles'));

	it('should render a FontAwesome SVG icon, with a specified type and size', () => {
		const faIcon = component.children().find('FontAwesomeIcon');

		expect(faIcon).toBeTruthy();
		expect(faIcon.length).toBe(1);
		expect(faIcon.prop('icon')).toBeTruthy();
		expect(faIcon.prop('size')).toBeTruthy();
	});
});
