import React from 'react';
import Item from './Item/Item';
import styles from './NavItems.module.css';

const Navitems: React.FC = () => {
	const { NavItemsStyle } = styles;

	return (
		<div className={NavItemsStyle}>
			<Item>Home</Item>
			<Item>Favorites</Item>
			<Item>About</Item>
		</div>
	);
};

export default Navitems;
