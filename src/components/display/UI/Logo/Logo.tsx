import React from 'react';
import Icon from '../Icon/Icon';
import { faRainbow } from '@fortawesome/free-solid-svg-icons';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
	const { LogoStyles } = styles;

	return (
		<div className={LogoStyles}>
			<Icon iconType={faRainbow} size={'3x'} />
			<p>Herolo's</p>
			<p>Weather app</p>
		</div>
	);
};

export default Logo;
