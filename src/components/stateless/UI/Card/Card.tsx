import React from 'react';
import styles from './Card.module.css';

interface IProps {
	mainHeading: string;
	secondaryHeading: string;
	info: string | number;
}

const Card: React.FC<IProps> = ({ mainHeading, secondaryHeading, info }) => {
	const { CardStyles } = styles;

	return (
		<div className={CardStyles}>
			<h3>{mainHeading}</h3>
			<h4>{secondaryHeading}</h4>
			<p>{info}</p>
		</div>
	);
};

export default Card;
