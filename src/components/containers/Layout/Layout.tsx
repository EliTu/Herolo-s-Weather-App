import React from 'react';
import Backdrop from '../../display/UI/Backdrop/Backdrop';
import styles from './Layout.module.css';

interface IProps {}

const Layout: React.FC<IProps> = ({ children }) => {
	const { LayoutStyles } = styles;

	return (
		<div className={LayoutStyles}>
			<Backdrop isDisplayed />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
