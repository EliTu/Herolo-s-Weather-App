import React from 'react';
import styles from './Navbar.module.css';
import NavItems from './NavItems/NavItems';
import Logo from '../UI/Logo/Logo';

interface IProps {}

const Navbar: React.FC = () => {
	const { NavbarStyle } = styles;

	return (
		<div className={NavbarStyle}>
			<Logo />
			<NavItems />
		</div>
	);
};

export default Navbar;
