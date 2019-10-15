import React from 'react';
import Item from './Item/Item';
import styles from './NavItems.module.css';

const Navitems: React.FC = () => {
	const { NavItemsStyles } = styles;

	return (
		<div className={NavItemsStyles}>
			<Item>Home</Item>
			<Item>Favorites</Item>
			<Item>About</Item>
		</div>
	);
};

export default Navitems;
