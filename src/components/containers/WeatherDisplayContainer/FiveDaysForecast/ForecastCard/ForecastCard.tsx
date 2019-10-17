import React from 'react';
import styles from './Card.module.css';

interface IProps {
	mainHeading: string;
	date: string;
	maxTempData: string;
	minTempData: string;
	description: string;
	link: string;
}

const ForecastCard: React.FC<IProps> = ({
	mainHeading,
	date,
	maxTempData,
	minTempData,
	description,
	link,
}) => {
	const { CardStyles } = styles;

	return (
		<div className={CardStyles}>
			<h3>
				<a href={link}>{mainHeading}</a>
			</h3>
			<h4>{date}</h4>
			<h4>{`${maxTempData} - ${minTempData}`}</h4>
			<p>{description}</p>
		</div>
	);
};

export default ForecastCard;
