// The Input component prop type TS interface
export interface IInputProps {
	elementType: string;
	elementConfig: {
		type: string;
		placeholder: string;
		label: string;
		options?: [{ value: string; displayValue: string; disabled: boolean }];
		min?: number;
		max?: number;
	};
	value: string | number;
	validation: {
		required: boolean;
		valid: boolean;
		hasUserInput: boolean;
		errorMessage: string;
	};
	isFocused: boolean;
	handleChange?: (event: object) => void;
	handleEnterPress?: (event: object) => void;
}
