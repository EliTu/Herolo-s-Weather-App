import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SearchResults from './SearchResults';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('SearchResults component', () => {
	let component: ShallowWrapper;
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
	});

	it('should be visible if searchValue length its > 2, isDisplayed is true and if there are elements in the resultList', () => {
		component.setProps({ isDisplayed: true });
		expect(component).toContainMatchingElement('div');
	});

	it('should render and display a list of results coming from the resultList prop', () => {
		component.setProps({ isDisplayed: true });
		expect(component.children()).toBeTruthy();
		expect(component.children().children().length).toBe(4);
	});
});
