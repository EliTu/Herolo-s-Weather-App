import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
	const { FooterStyles } = styles;

	return (
		<div className={FooterStyles}>
			<p>
				Made for{' '}
				<a
					href="https://herolo.co.il/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Herolo
				</a>{' '}
				using{' '}
				<a
					href="https://reactjs.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					React
				</a>{' '}
				with ❤️, by{' '}
				<a
					href="https://github.com/EliTu"
					target="_blank"
					rel="noopener noreferrer"
				>
					Eliad Tuksher
				</a>{' '}
				2019
			</p>
		</div>
	);
};

export default Footer;
