import React from 'react';
import Icon from '../Icon/Icon';
import { faRainbow } from '@fortawesome/free-solid-svg-icons';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
	const { LogoStyles } = styles;

	return (
		<div className={LogoStyles}>
			<Icon iconType={faRainbow} size={'4x'} />
			<ul>
				<li>Herolo's</li>
				<li>Weather app</li>
			</ul>
		</div>
	);
};

export default Logo;
