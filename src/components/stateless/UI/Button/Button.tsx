import React from 'react';
import styles from './Button.module.css';

interface IProps {
	children: string;
}

const Button: React.FC<IProps> = ({ children }) => {
    const { ButtonStyles } = styles;
    
	return (
		<button className={ButtonStyles} type="button">
			{children}
		</button>
	);
};

export default Button;
