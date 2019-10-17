import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { WeatherDisplayContainer } from './WeatherDIsplayContainer';
import initialShallowRender from '../../../utilities/test-utilities/initialShallowRender';

describe('WeatherDisplayContainer', () => {
	let component: ShallowWrapper;
	beforeEach(
		() =>
			(component = shallow(
				<WeatherDisplayContainer
					weatherError={'abc'}
					fiveDaysForecastError={'defg'}
				/>
			))
	);

	it('should render without errors', () =>
		initialShallowRender(component, '.WeatherDisplayContainerStyles'));
});
