export const inputTemplateData = {
	elementType: 'input',
	elementConfig: {
		type: 'search',
		placeholder: 'Please enter a city name',
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
