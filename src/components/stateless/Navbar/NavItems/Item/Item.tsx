import React from 'react';
import styles from '.Item.module.css';

const Item: React.FC = () => {
    const { ItemStyles } = styles;
    
	return <div className={ItemStyles}></div>;
};

export default Item;
