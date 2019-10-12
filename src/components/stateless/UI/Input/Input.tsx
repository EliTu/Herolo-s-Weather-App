import React, { useRef, useEffect } from 'react';
import styles from './Input.module.css';

interface IProps {
	elementType: string;
	elementConfig: object;
	value: string | number;
	validation?: object;
	focused: boolean;
	data: string;
	handleChange: (event: object) => void;
	handleEnterPress: (event: object) => void;
}

const Input: React.FC<IProps> = ({
	elementType,
	elementConfig,
	value,
	validation,
	focused,
	handleChange,
	handleEnterPress,
	data,
}) => {
	const { InputStyles } = styles;

	let inputElement = null;

	// let errorMessageElement = (
	// 	<p className={errorMessageStyle}>{validation.errorMessage}</p>
	// );

	// Listen to keyboard enter click to submit form:
	const enterPressCallback = (
		data?: string,
		event: object,
		func: () => void
	) => {
		if (event.key === 'Enter' && data !== 'search') func(event);
	};

	// Focus the first input field upon component mount
	const focusRef = useRef();
	useEffect(() => {
		if (focused) focusRef.current.focus();
	}, [focused]);

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
						enterPressCallback(data, event, handleEnterPress)
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
					className={!validation.valid ? InvalidStyle : null}
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
