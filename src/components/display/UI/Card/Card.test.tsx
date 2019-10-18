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
					maxTempData={'20C'}
					minTempData={'15C'}
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
				.at(0)
				.text()
		).toBe('Thursday');
		expect(
			component
				.children()
				.find('h3')
				.at(1)
				.text()
		).toBe('10-02-2019');
		expect(
			component
				.children()
				.find('h4')
				.at(0)
				.text()
		).toBe('20C - 15C');
		expect(
			component
				.children()
				.find('p')
				.text()
		).toBe('warm');
	});

	it('should have an h3 tag with an a tag nested inside of it', () => {
		const h3 = component.find('h3').at(0);

		expect(h3).toContainMatchingElement('a');
		expect(h3.children().length).toBe(1);
	});
});
