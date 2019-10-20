// The Input component prop type TS interface
export interface IInputProps {
	elementConfig: {
		type: string;
		placeholder: string;
		label: string;
	};
	value: string | number;
	isFocused: boolean;
	handleChange?: (event: object) => void;
}
