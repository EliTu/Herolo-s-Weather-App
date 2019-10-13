import React from 'react';
import Icon from '../../../stateless/UI/Icon/Icon';
import styles from './SelectedWeather.module.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';

const SelectedWeather: React.FC = () => {
	const { SelectedWeatherStyles, testDiv } = styles;
	return (
		<div className={SelectedWeatherStyles}>
			<div className={testDiv}>Img</div>
			<p>Current weather forcast</p>
			<button>
				<Icon iconType={faHeart} size={'3x'} />
			</button>
		</div>
	);
};

export default SelectedWeather;
