import React from 'react';
import styles from './Item.module.css';

interface IProps {
	children: string;
}

const Item: React.FC<IProps> = ({ children }) => {
	const { ItemStyles } = styles;

	return <div className={ItemStyles}>{children}</div>;
};

export default Item;
