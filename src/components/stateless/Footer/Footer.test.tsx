import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
	let component;
	beforeEach(() => (component = shallow(<Footer />)));

	it('should render without issues', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component).toHaveClassName('FooterStyles');
	});

	it('should include a single p tag with a text, that also contains 3 a tags', () => {
		const pTag = component.find('p');

		expect(pTag.length).toBe(1);
		expect(pTag.text()).toBeTruthy();
		expect(pTag.find('a').length).toBe(3);
	});

	it('a tags should contain external links and a text', () => {
		const aTag = component.children().find('a');

		expect(
			aTag.at(0).containsMatchingElement(
				<a
					href="https://herolo.co.il/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Herolo
				</a>
			)
		).toBe(true);

		expect(
			aTag.at(1).containsMatchingElement(
				<a
					href="https://reactjs.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					React
				</a>
			)
		).toBe(true);

		expect(
			aTag.at(2).containsMatchingElement(
				<a
					href="https://github.com/EliTu"
					target="_blank"
					rel="noopener noreferrer"
				>
					Eliad Tuksher
				</a>
			)
		).toBe(true);
	});
});
