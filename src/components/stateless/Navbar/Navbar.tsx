import React from 'react';
import styles from './Navbar.module.css';

interface Navbar {}

const Navbar = () => {
	const { NavbarStyle } = styles;

	return <div className={NavbarStyle}></div>;
};

export default Navbar;
