import React from 'react';
import styles from './Card.module.css';

interface IProps {
	mainHeading: string;
	date: string;
	maxTempData: { Value: Number; Unit: string };
	minTempData: { Value: Number; Unit: string };
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

	const { Value: maxVal, Unit: maxUnit } = maxTempData;
	const maxTemp = `${maxVal} ${maxUnit}`;

	const { Value: minVal, Unit: minUnit } = minTempData;
	const minTemp = `${minVal} ${minUnit}`;

	return (
		<div className={CardStyles}>
			<h3>
				<a href={link}>{mainHeading}</a>
			</h3>
			<h4>{date}</h4>
			<h4>{`${maxTemp} - ${minTemp}`}</h4>
			<p>{description}</p>
		</div>
	);
};

export default ForecastCard;
