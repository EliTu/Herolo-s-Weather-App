import React, { useRef, useEffect } from 'react';
import styles from './Input.module.css';
import { IInputProps } from './inputPropsInterface';

const Input: React.FC<IInputProps> = ({
	elementType,
	elementConfig,
	value,
	validation,
	isFocused,
	handleChange,
}) => {
	const { InputStyles, invalidStyle, ValidStyle } = styles;

	let inputElement = null;

	// Focus the first input field upon component mount
	const focusRef: React.RefObject<any> = useRef();

	useEffect(() => {
		if (isFocused) focusRef.current.focus();
	}, [isFocused]);

	// Set validation styles:
	let validationStyles: string = '';
	validationStyles =
		!validation.valid && validation.hasUserInput
			? invalidStyle
			: validation.valid && validation.hasUserInput && value !== ''
			? ValidStyle
			: '';

	switch (elementType) {
		case 'input':
			inputElement = (
				<input
					ref={focusRef}
					className={validationStyles}
					{...elementConfig}
					value={value}
					onChange={handleChange}
					data-test="input-test"
				/>
			);
			break;

		case 'textarea':
			inputElement = (
				<textarea
					{...elementConfig}
					value={value}
					onChange={handleChange}
					data-test="textarea-test"
				/>
			);
			break;

		case 'select':
			inputElement = (
				<select
					value={value}
					onChange={handleChange}
					data-test="select-test"
				>
					{elementConfig.options &&
						elementConfig.options.map(option => (
							<option
								value={option.value}
								key={option.value}
								disabled={option.disabled}
							>
								{option.displayValue}
							</option>
						))}
				</select>
			);
			break;

		default:
			inputElement = <input {...elementConfig} value={value} />;
	}
	return (
		<div className={InputStyles}>
			<label>{elementConfig.label}</label>
			{inputElement}
		</div>
	);
};

export default Input;
