import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NavItems from './NavItems';
import Item from './Item/Item';
import '../../../../setupTests';

describe('NavItems component', () => {
	let component: ShallowWrapper;

	beforeEach(() => {
		component = shallow(<NavItems />);
	});

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('NavItemsStyle');
	});

	it('should render a div with 3 Item components with the texts Home, Favorites and About', () => {
		const container = component.find('div');

		expect(container.length).toBe(1);
		expect(container.children()).toHaveLength(3);
		expect(container).toContainReact(<Item>Home</Item>);
		expect(container).toContainReact(<Item>About</Item>);
		expect(container).toContainReact(<Item>Favorites</Item>);
	});
});
