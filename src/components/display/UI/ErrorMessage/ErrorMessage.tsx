import React from 'react';

import styles from './ErrorMessage.module.css';

interface IProps {
    errorDetails: string;
	errorType: string;
}

export const ErrorMessage: React.FC<IProps> = ({ errorDetails, errorType }) => {
	const { ErrorMessageStyles } = styles;

	let headMessage;
	let secondaryMessage;
	switch (errorType) {
		case 'searchError':
			headMessage = 'Oops...';
			secondaryMessage = 'Could not perfrom search!';
			break;
		case 'currentWeatherError':
		case 'fiveDaysForecastError':
			headMessage = 'Oops...';
			secondaryMessage = 'Something went wrong with the request :(';
			break;
		default:
			headMessage = '';
			secondaryMessage = '';
			break;
	}

	return (
		<div className={ErrorMessageStyles}>
			<p>{headMessage}</p>
			<p>{secondaryMessage}</p>
			<p>
				The reason seems to be: <span>{errorDetails}</span>
			</p>
			<p>Please try again in a short while!</p>
		</div>
	);
};

export default ErrorMessage;
