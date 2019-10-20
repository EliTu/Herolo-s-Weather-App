import React from 'react';
import Item from './Item/Item';
import styles from './NavItems.module.css';

const Navitems: React.FC = () => {
	const { NavItemsStyles } = styles;

	return (
		<div className={NavItemsStyles}>
			<Item link={'/'}>Home</Item>
			<Item link={'/favorites'}>My Favorites</Item>
			<Item link={'/about'}>About</Item>
		</div>
	);
};

export default Navitems;
