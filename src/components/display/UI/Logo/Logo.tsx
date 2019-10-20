import React from 'react';
import Icon from '../Icon/Icon';
import { faRainbow } from '@fortawesome/free-solid-svg-icons';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
	const { LogoStyles, brandColor } = styles;

	return (
		<div className={LogoStyles}>
			<Icon iconType={faRainbow} size={'4x'} color={'#7744a2'} />
			<ul>
				<li className={brandColor}>Herolo's</li>
				<li>Weather app</li>
			</ul>
		</div>
	);
};

export default Logo;
