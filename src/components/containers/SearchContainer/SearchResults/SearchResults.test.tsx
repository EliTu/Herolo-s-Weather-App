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
					searchValue={''}
					isDisplayed={false}
				/>
			))
	);

	it('should render without errors', () =>
		initialShallowRender(component, '.SearchResultsStyles'));

	it('should be invisible if searchValue length is < 2', () => {
		expect(component).toHaveStyle('display: none');
	});

	it('should be visible if searchValue length its > 2', () => {
		component.setProps({ searchValue: 'Lon' });
		expect(component).toHaveStyle('display: flex');
	});

	it('should render and display a list of results coming from the resultList prop', () => {
		expect(component.children()).toBeTruthy();
		expect(component.children().length).toBe(5);
	});
});
