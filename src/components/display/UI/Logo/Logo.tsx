import React from 'react';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
	const { LogoStyles, testDiv } = styles;

	return (
		<div className={LogoStyles}>
			<div className={testDiv} />
			<span>Herolo Weather app!</span>
		</div>
	);
};

export default Logo;
