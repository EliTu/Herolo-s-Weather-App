import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Card from './Card';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('Card component', () => {
	let component: ShallowWrapper;
	beforeEach(
		() =>
			(component = shallow(
				<Card
					mainHeading={'Thursday'}
					date={'10-02-2019'}
					description={'warm'}
					link={'www'}
					maxTempData={'20 C'}
					minTempData={'15 C'}
				/>
			))
	);

	it('should render without errors', () =>
		initialShallowRender(component, '.CardStyles'));

	it('should render a div with an h3, h4 and p tags, containing the info passed as props', () => {
		expect(
			component
				.children()
				.find('h3')
				.text()
		).toBe('Thursday');
		expect(
			component
				.children()
				.find('h4')
				.at(0)
				.text()
		).toBe('10-02-2019');
		expect(
			component
				.children()
				.find('h4')
				.at(1)
				.text()
		).toBe('20 C - 15 C');
		expect(
			component
				.children()
				.find('p')
				.text()
		).toBe('warm');
	});
});
