import React from 'react';
import Card from '../../../display/UI/Card/Card';
import styles from './FiveDaysForecast.module.css';

interface IProps {}

export const FiveDaysForecast: React.FC<IProps> = () => {
	const { FiveDaysForecastStyles } = styles;

	return (
		<div className={FiveDaysForecastStyles}>
			<Card
				mainHeading={'Tomorrow'}
				secondaryHeading={'30 c'}
				info={'Hot'}
			></Card>
			<Card
				mainHeading={'Tomorrow'}
				secondaryHeading={'30 c'}
				info={'Hot'}
			></Card>
			<Card
				mainHeading={'Tomorrow'}
				secondaryHeading={'30 c'}
				info={'Hot'}
			></Card>
			<Card
				mainHeading={'Tomorrow'}
				secondaryHeading={'30 c'}
				info={'Hot'}
			></Card>
			<Card
				mainHeading={'Tomorrow'}
				secondaryHeading={'30 c'}
				info={'Hot'}
			></Card>
		</div>
	);
};

export default FiveDaysForecast;
