import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { WeatherDisplayContainer } from './WeatherDIsplayContainer';
import Loader from '../../display/UI/Loader/Loader';
import ErrorMessage from '../../display/UI/ErrorMessage/ErrorMessage';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('WeatherDisplayContainer', () => {
	let component: ShallowWrapper;
	beforeEach(
		() =>
			(component = shallow(
				<WeatherDisplayContainer
					weatherError={''}
					fiveDaysForecastError={''}
					isCurrentWeatherLoading={false}
					isFiveDaysForecastLoading={false}
				/>
			))
	);

	it('should render without errors', () =>
		initialShallowRender(component, '.WeatherDisplayContainerStyles'));

	it('should display the Loader componenet if isCurrentWeatherLoading is true', () => {
		component.setProps({ isCurrentWeatherLoading: true });

		expect(component).toMatchSnapshot();
		expect(component.children().length).toBe(1);
		expect(component.children()).toContainReact(<Loader />);
	});

	it('should display the Loader componenet if isFiveDaysForecastLoading is true', () => {
		component.setProps({ isFiveDaysForecastLoading: true });

		expect(component).toMatchSnapshot();
		expect(component.children().length).toBe(1);
		expect(component.children()).toContainReact(<Loader />);
	});

	it('should render the ErrorMessage component if weatherError is truthy', () => {
		component.setProps({ weatherError: 'abc' });

		expect(component).toMatchSnapshot();
		expect(component.children().length).toBe(1);
		expect(component.children()).toContainReact(
			<ErrorMessage errorDetails={'abc'} />
		);
	});

	it('should render the ErrorMessage component if fiveDaysForecastError is truthy', () => {
		component.setProps({ fiveDaysForecastError: 'efg' });

		expect(component).toMatchSnapshot();
		expect(component.children().length).toBe(1);
		expect(component.children()).toContainReact(
			<ErrorMessage errorDetails={'efg'} />
		);
	});
});
