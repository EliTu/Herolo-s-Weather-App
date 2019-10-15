import { ShallowWrapper } from 'enzyme';

// Used to find a specific DOM element that is specified with the 'data-test' attribute to better traverse nodes while testing:
const findByTestAttr = (component: ShallowWrapper, attr: string) => {
	const wrapper = component.find(`[data-test='${attr}']`);
	return wrapper;
};

export default findByTestAttr;
