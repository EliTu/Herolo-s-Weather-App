import React, { useState } from 'react';
import FavIcon from '../../../stateless/UI/Icon/FavIcon/FavIcon';
import styles from './SelectedWeather.module.css';

const SelectedWeather: React.FC = () => {
	const { SelectedWeatherStyles, testDiv } = styles;

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
