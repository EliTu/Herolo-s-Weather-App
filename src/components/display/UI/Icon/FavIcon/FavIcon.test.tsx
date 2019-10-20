import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FavIcon from './FavIcon';

describe('FavIcon component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<FavIcon isFavorite={false} />)));

	it('should render without issues', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});

	it('should have 2 FontAwesome Icons inside the span', () => {
		const faIcon = component.children().find('Icon');

		expect(faIcon).toBeTruthy();
		expect(faIcon.length).toBe(2);
	});

	it('should set different colors if the isFavorite prop changes', () => {
		let innerHeart = component.children().at(0);
		let hallowHeart = component.children().at(1);

		expect(innerHeart.length).toBe(1);
		expect(innerHeart.prop('color')).toBe('transparent');
		expect(hallowHeart.length).toBe(1);
		expect(hallowHeart.prop('color')).toBe('#282828c0');

		component.setProps({ isFavorite: true });
		innerHeart = component.children().at(0);
		hallowHeart = component.children().at(1);

		expect(component).toMatchSnapshot();
		expect(innerHeart.prop('color')).toBe('#cc61f7db');
		expect(hallowHeart.prop('color')).toBe('#282828c0');
	});
});
