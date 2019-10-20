import React from 'react';
import Input from './Input';
import { IInputProps } from './inputPropsInterface';
import { shallow, ShallowWrapper } from 'enzyme';
import findByTestAttr from '../../../../utilities/test-utilities/findByTestAttr';
import initialShallowRender from '../../../../utilities/test-utilities/initialShallowRender';

const onChange: () => void = jest.fn();

const setComponentProps = (
	configType: string = 'text',
	value: string = 'abc',
	hasInput: boolean = true
) => {
	const props: IInputProps = {
		elementConfig: {
			type: `${configType}`,
			placeholder: 'abc',
			label: 'abc',
		},
		value: `${value}`,
		isFocused: true,
		handleChange: () => {},
	};
	return props;
};

const setComponent = (props: IInputProps, changeFn = () => {}) => {
	const component: ShallowWrapper = shallow(
		<Input {...props} handleChange={changeFn} />
	);
	return component;
};

describe('Input component', () => {
	describe('Component (not testing the input fields)', () => {
		it('should render an Input component withot errors', () => {
			let props = setComponentProps('text', 'abc', true);
			let component = setComponent(props);
			initialShallowRender(component, '.InputStyles');
		});
	});

	describe('Type: input="text" test', () => {
		let props = setComponentProps('input');
		let component = setComponent(props);
		let input = findByTestAttr(component, 'input-test');

		it('should render the component without errors', () => {
			expect(component).toMatchSnapshot();
			expect(input.length).toBe(1);
		});

		it('should call the onChange event callback function on user input', () => {
			props = setComponentProps('input', 'abc', true);
			component = setComponent(props, onChange);
			input = findByTestAttr(component, 'input-test');

			input.simulate('change', {
				target: { value: 'abc' },
			});

			expect(onChange).toHaveBeenCalled();
		});
	});
});
