import { IInputProps } from './../../stateless/UI/Input/inputPropsInterface';

export const inputTemplateData: IInputProps = {
	elementType: 'input',
	elementConfig: {
		type: 'search',
		placeholder:
			'Please start entering a city name, e.g: London, New-York, Berlin etc...',
		label: '',
		min: 1,
		max: 30,
	},
	value: '',
	validation: {
		required: false,
		valid: true,
		hasUserInput: false,
		errorMessage: 'Input should have at least one character long',
	},
	isFocused: false,
};
