import React from 'react';
import styles from './Navbar.module.css';
import NavItems from './NavItems/NavItems';
import Logo from '../UI/Logo/Logo';

interface IProps {}

const Navbar: React.FC = () => {
	const { NavbarStyles } = styles;

	return (
		<header className={NavbarStyles}>
			<Logo />
			<NavItems />
		</header>
	);
};

export default Navbar;
