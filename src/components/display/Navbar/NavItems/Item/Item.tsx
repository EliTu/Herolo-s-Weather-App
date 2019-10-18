import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Item.module.css';

interface IProps {
	children: string;
	link: string;
}

const Item: React.FC<IProps> = ({ children, link }) => {
	const { ItemStyles } = styles;

	return (
		<NavLink className={ItemStyles} to={link} exact>
			{children}
		</NavLink>
	);
};

export default Item;
