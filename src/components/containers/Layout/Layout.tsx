import React from 'react';
import styles from './Layout.module.css';

interface IProps {}

const Layout: React.FC<IProps> = ({ children }) => {
	const { LayoutStyles } = styles;

	return (
		<div className={LayoutStyles}>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
