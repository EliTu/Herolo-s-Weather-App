import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SearchResults } from './SearchResults';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('SearchResults component', () => {
	let component: ShallowWrapper;
	const currentWeatherClickCallback: () => void = jest.fn();
	const fiveDaysForecastClickCallback: () => void = jest.fn();

	beforeEach(
		() =>
			(component = shallow(
				<SearchResults
					resultList={[
						{
							LocalizedName: 'London',
							Key: '1',
							Country: { LocalizedName: 'UK' },
							AdministrativeArea: { ID: 'LD' },
						},
						{
							LocalizedName: 'London',
							Key: '1',
							Country: { LocalizedName: 'UK' },
							AdministrativeArea: { ID: 'LD' },
						},
						{
							LocalizedName: 'London',
							Key: '1',
							Country: { LocalizedName: 'UK' },
							AdministrativeArea: { ID: 'LD' },
						},
						{
							LocalizedName: 'London',
							Key: '1',
							Country: { LocalizedName: 'UK' },
							AdministrativeArea: { ID: 'LD' },
						},
					]}
					searchValue={'Lon'}
					isDisplayed={false}
					error={'abc'}
					closeResultsList={currentWeatherClickCallback}
					currentWeatherHttpRequest={currentWeatherClickCallback}
					fiveDaysForecastHttpRequest={fiveDaysForecastClickCallback}
				/>
			))
	);

	it('should render without errors', () => {
		component.setProps({ isDisplayed: true });
		initialShallowRender(component, '.SearchResultsStyles');
	});

	it('should not be displayed if searchValue length is < 2, isDisplayed is false or there are no elements in the resultList', () => {
		component.setProps({ resultList: [] });
		expect(component).toMatchSnapshot();
		expect(component).not.toContainMatchingElement('div');

		component.setProps({
			resultList: [
				{
					LocalizedName: 'London',
					Key: '1',
					Country: { LocalizedName: 'UK' },
					AdministrativeArea: { ID: 'LD' },
				},
			],
			searchValue: 'a',
		});
		expect(component).not.toContainMatchingElement('div');

		component.setProps({ searchValue: 'Lond', isDisplayed: false });
		expect(component).not.toContainMatchingElement('div');

		component.setProps({ error: 'abc' });
		expect(component).not.toContainMatchingElement('div');
	});

	it('should be visible if searchValue length its > 2, isDisplayed is true and if there are elements in the resultList', () => {
		component.setProps({ isDisplayed: true });
		expect(component).toContainMatchingElement('div');
	});

	it('should render and display a list of results coming from the resultList prop', () => {
		component.setProps({ isDisplayed: true });

		const ul = component.children();
		const li = component.children().children();
		expect(ul).toBeTruthy();
		expect(ul.length).toBe(1);
		expect(li.length).toBe(4);
	});

	it('should render LocalizedName, Country LocalizedName and AdministrativeArea ID as a string', () => {
		component.setProps({ isDisplayed: true });
		const li = component.children().children();

		expect(li.at(0).text()).toBe('London, LD, UK');
		expect(li.at(1).text()).toBe('London, LD, UK');
		expect(li.at(2).text()).toBe('London, LD, UK');
		expect(li.at(3).text()).toBe('London, LD, UK');
	});

	it('should fire a callback function when a li element is clicked', () => {
		component.setProps({ isDisplayed: true });

		const li = component
			.children()
			.find('li')
			.at(0);

		li.at(0).simulate('click');
		expect(currentWeatherClickCallback).toHaveBeenCalled();
	});
});
