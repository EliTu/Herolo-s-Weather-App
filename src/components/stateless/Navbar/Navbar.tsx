import React from 'react';
import styles from './Navbar.module.css';

interface INavbar {}

const Navbar: React.FC = () => {
	const { NavbarStyle } = styles;

	return <div className={NavbarStyle}></div>;
};

export default Navbar;
