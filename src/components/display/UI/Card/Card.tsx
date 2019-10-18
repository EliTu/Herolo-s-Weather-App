import React from 'react';
import styles from './Card.module.css';

interface IProps {
	mainHeading: string;
	date: string;
	link: string;
	description: string;
	maxTempData?: string;
	minTempData?: string;
}

const Card: React.FC<IProps> = ({
	mainHeading,
	date,
	description,
	link,
	maxTempData,
	minTempData,
}) => {
	const { CardStyles } = styles;

	return (
		<div className={CardStyles}>
			<h3>
				<a href={link}>{mainHeading}</a>
			</h3>
			<h3>{date}</h3>
			<h4>{`${maxTempData} - ${minTempData}`}</h4>
			<p>{description}</p>
		</div>
	);
};

export default Card;
