import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SearchResults from './SearchResults';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

describe('SearchResults component', () => {
	let component: ShallowWrapper;
	beforeEach(
		() => (component = shallow(<SearchResults resultList={[{}, {}, {}]} />))
	);

	it('should render without errors', () =>
		initialShallowRender(component, '.SearchResultsStyles'));
});
