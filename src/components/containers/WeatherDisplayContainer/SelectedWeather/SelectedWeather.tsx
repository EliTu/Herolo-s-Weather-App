import React, { useState, useEffect } from 'react';
import { fireCurrentWeatherHttpRequest } from '../store/actions';
import FavIcon from '../../../display/UI/Icon/FavIcon/FavIcon';
import styles from './SelectedWeather.module.css';

const SelectedWeather: React.FC = () => {
	const { SelectedWeatherStyles, testDiv } = styles;

	// On component mount, by default, set and display Tel-Aviv's weather info
	useEffect(() => {
		fireCurrentWeatherHttpRequest('');
	}, []);

	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<div className={SelectedWeatherStyles}>
			<div className={testDiv}>Img</div>
			<p>Current weather forcast</p>
			<button>
				<FavIcon isFavorite={isFavorite} />
			</button>
		</div>
	);
};

export default SelectedWeather;
