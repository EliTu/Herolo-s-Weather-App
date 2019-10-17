import React from 'react';
import styles from './ErrorMessage.module.css';

interface IProps {
	errorDetails: string | undefined;
}

export const ErrorMessage: React.FC<IProps> = ({ errorDetails }) => {
	const { ErrorMessageStyles } = styles;

	return (
		<div className={ErrorMessageStyles}>
			<p>Oops...</p>
			<p>Something went wrong with the server request :(</p>
			<p>
				The reason seems to be: <span>{errorDetails}</span>
			</p>
			<p>Please try again in a short while!</p>
		</div>
	);
};

export default ErrorMessage;
