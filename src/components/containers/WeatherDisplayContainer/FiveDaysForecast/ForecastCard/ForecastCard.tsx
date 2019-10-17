import React from 'react';
import styles from './Card.module.css';

interface IProps {
	mainHeading: string;
	date: string;
	maxTempData: {};
	minTempData: {};
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
			<h3>{mainHeading}</h3>
			<h4>{secondaryHeading}</h4>
			<p>{info}</p>
		</div>
	);
};

export default ForecastCard;
