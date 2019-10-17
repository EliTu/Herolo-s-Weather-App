import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage component', () => {
	let component: ShallowWrapper;
	beforeEach(() => (component = shallow(<ErrorMessage errorDetails={''} />)));

	it('should render without errors', () => {
		initialShallowRender(component, 'ErrorMessageStyles');
	});

	it('should render 4 p tags', () => {
		expect(component.children().length).toBe(4);
	});

	it('should render a search error message if errorType is searchError', () => {
		component.setProps({
			errorDetails: 'network error',
		});

		expect(component).toMatchSnapshot();
		expect(
			component
				.children()
				.at(0)
				.text()
		).toBe('Oops...');
		expect(
			component
				.children()
				.at(1)
				.text()
		).toBe('Something went wrong with the server request :(');
		expect(
			component
				.children()
				.at(2)
				.text()
		).toBe('The reason seems to be: network error');
		expect(
			component
				.children()
				.at(3)
				.text()
		).toBe('Please try again in a short while!');
	});

	it('should render a currentWeather error message if errorType is currentWeatherError', () => {
		component.setProps({
			errorDetails: 'internal error',
		});

		expect(component).toMatchSnapshot();
		expect(
			component
				.children()
				.at(0)
				.text()
		).toBe('Oops...');
		expect(
			component
				.children()
				.at(1)
				.text()
		).toBe('Something went wrong with the server request :(');
		expect(
			component
				.children()
				.at(2)
				.text()
		).toBe('The reason seems to be: internal error');
		expect(
			component
				.children()
				.at(3)
				.text()
		).toBe('Please try again in a short while!');
	});

	it('should render a fiveDaysForecast error message if errorType is fiveDaysForecastError', () => {
		component.setProps({
			errorDetails: 'source error',
		});

		expect(component).toMatchSnapshot();
		expect(
			component
				.children()
				.at(0)
				.text()
		).toBe('Oops...');
		expect(
			component
				.children()
				.at(1)
				.text()
		).toBe('Something went wrong with the server request :(');
		expect(
			component
				.children()
				.at(2)
				.text()
		).toBe('The reason seems to be: source error');
		expect(
			component
				.children()
				.at(3)
				.text()
		).toBe('Please try again in a short while!');
	});
});
