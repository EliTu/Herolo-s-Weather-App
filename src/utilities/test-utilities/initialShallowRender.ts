import { ShallowWrapper } from 'enzyme';

const initialShallowRender = (
	comp: ShallowWrapper,
	className: string
): void => {
	expect(comp).toMatchSnapshot();
	expect(comp.length).toBe(1);
	expect(comp.length).not.toBe(2);
	expect(comp).toHaveClassName(`${className}`);
};

export default initialShallowRender;