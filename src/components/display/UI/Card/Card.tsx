import React from 'react';
import styles from './Card.module.css';

interface IProps {
	mainHeading: string;
	date: string;
	link?: string;
	description: string;
	temperatures: string;
}

const Card: React.FC<IProps> = ({
	mainHeading,
	date,
	description,
	link,
	temperatures,
}) => {
	const { CardStyles } = styles;

	return (
		<div className={CardStyles}>
			<h3>
				<a href={link}>{mainHeading}</a>
			</h3>
			<h3>{date}</h3>
			<h4>{temperatures}</h4>
			<p>{description}</p>
		</div>
	);
};

export default Card;
