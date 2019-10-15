import React from 'react';
import styles from './Backdrop.module.css';

interface IProps {
	isDisplayed: boolean;
}

const Backdrop: React.FC<IProps> = ({ isDisplayed }) => {
	const { BackdropStyles } = styles;

	return <>{isDisplayed && <div className={BackdropStyles}></div>}</>;
};

export default Backdrop;
