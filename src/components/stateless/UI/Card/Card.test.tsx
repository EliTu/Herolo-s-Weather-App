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
					mainHeading={'card-test'}
					secondaryHeading={'1'}
					info={'abc'}
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
		).toBe('card-test');
		expect(
			component
				.children()
				.find('h4')
				.text()
		).toBe('1');
		expect(
			component
				.children()
				.find('p')
				.text()
		).toBe('abc');
	});
});
