import React from 'react';
import styles from './Card.module.css';

interface IProps {
	mainHeading: string;
	date?: string;
	link?: string;
	description: string;
	temperatures?: string;
	minValue?: number;
	maxValue?: number;
}

const Card: React.FC<IProps> = ({
	mainHeading,
	date,
	description,
	link,
	temperatures,
	minValue,
	maxValue,
}) => {
	const {
		CardStyles,
		headingStyle,
		dateStyle,
		temperatureStyle,
		descriptionStyle,
	} = styles;

	return (
		<div className={CardStyles}>
			<h3 className={headingStyle}>
				<a href={link}>{mainHeading}</a>
			</h3>
			<h3 className={dateStyle}>{date}</h3>
			{temperatures && (
				<h4 className={temperatureStyle}>
					{`${temperatures}`}
					<span>&#176;</span>
					{`C`}
				</h4>
			)}
			{minValue && maxValue && (
				<h4 className={temperatureStyle}>
					{`${maxValue}`}
					<span>&#176;</span>
					{`C`} - {`${minValue}`}
					<span>&#176;</span>
					{`C`}
				</h4>
			)}
			<p className={descriptionStyle}>{description}</p>
		</div>
	);
};

export default Card;
