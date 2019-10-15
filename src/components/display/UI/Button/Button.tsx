import React from 'react';
import styles from './Button.module.css';

interface IProps {
	children: string;
	handleButtonClick: () => void;
}

const Button: React.FC<IProps> = ({ children, handleButtonClick }) => {
	const { ButtonStyles } = styles;

	return (
		<button
			className={ButtonStyles}
			type="button"
			onClick={handleButtonClick}
		>
			{children}
		</button>
	);
};

export default Button;
