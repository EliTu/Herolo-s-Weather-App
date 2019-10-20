import React, { useRef, useEffect } from 'react';
import styles from './Input.module.css';
import { IInputProps } from './inputPropsInterface';

const Input: React.FC<IInputProps> = ({
	elementConfig,
	value,
	isFocused,
	handleChange,
}) => {
	const { InputStyles } = styles;

	// Focus the first input field upon component mount
	const focusRef: React.RefObject<any> = useRef();

	useEffect(() => {
		if (isFocused) focusRef.current.focus();
	}, [isFocused]);
	return (
		<div className={InputStyles}>
			<label>{elementConfig.label}</label>
			<input
				ref={focusRef}
				{...elementConfig}
				value={value}
				onChange={handleChange}
				data-test="input-test"
			/>
		</div>
	);
};

export default Input;
