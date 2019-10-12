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
	handleEnterPress,
	data,
}) => {
	const { InputStyles, validationStyles } = styles;

	let inputElement = null;

	// let errorMessageElement = (
	// 	<p className={errorMessageStyle}>{validation.errorMessage}</p>
	// );

	// Listen to keyboard enter click to submit form:
	const enterPressCallback = (
		event: object,
		func: (e: object) => void,
		data?: string
	) => {
		if (event.key === 'Enter' && data !== 'search') func(event);
	};

	// Focus the first input field upon component mount
	const focusRef: object = useRef();
	useEffect(() => {
		if (isFocused) focusRef.current.focus();
	}, [isFocused]);

	// Set validation styles:
	// let validationStyles = [];
	// validationStyles =
	// 	!validation.valid && validation.hasUserInput
	// 		? InvalidStyle
	// 		: validation.valid && validation.hasUserInput && value !== ''
	// 		? ValidStyle
	// 		: [];

	switch (elementType) {
		case 'input':
			inputElement = (
				<input
					ref={focusRef}
					className={validationStyles}
					{...elementConfig}
					value={value}
					onChange={handleChange}
					onKeyPress={event =>
						enterPressCallback(event, handleEnterPress, data)
					}
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
					onKeyPress={event =>
						enterPressCallback(event, handleEnterPress)
					}
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
					{elementConfig.options.map(option => (
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
			inputElement = (
				<input
					{...elementConfig}
					value={value}
					// className={!validation.valid ? InvalidStyle : null}
					onKeyPress={event =>
						enterPressCallback(event, handleEnterPress)
					}
				/>
			);
	}
	return (
		<div className={InputStyles}>
			<label>{elementConfig.label}</label>
			{inputElement}
		</div>
	);
};

export default Input;
