import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NavItems from './NavItems';
import Item from './Item/Item';
import '../../../../setupTests';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('NavItems component', () => {
	let component: ShallowWrapper;

	beforeEach(() => {
		component = shallow(<NavItems />);
	});

	it('should render without errors', () =>
		initialShallowRender(component, '.NavItemsStyles'));

	it('should render a div with 3 Item components with the texts Home, Favorites and About', () => {
		const container = component.find('div');

		expect(container.length).toBe(1);
		expect(container.children()).toHaveLength(3);
		expect(container).toContainReact(<Item link={'/'}>Home</Item>);
		expect(container).toContainReact(<Item link={'/about'}>About</Item>);
		expect(container).toContainReact(
			<Item link={'/favorites'}>My Favorites</Item>
		);
	});
});
