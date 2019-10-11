import React from 'react';
import styles from './NavItems.module.css';

const Navitems: React.FC = () => {
	const { NavItemsStyle } = styles;

	return <div className={NavItemsStyle}></div>;
};

export default Navitems;
