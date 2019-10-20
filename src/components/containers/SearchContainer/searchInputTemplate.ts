import { IInputProps } from '../../display/UI/Input/inputPropsInterface';

export const inputTemplateData: IInputProps = {
	elementConfig: {
		type: 'search',
		placeholder:
			'Please start entering a city name, e.g: London, New-York, Berlin etc...',
		label: '',
	},
	value: '',
	isFocused: false,
};
