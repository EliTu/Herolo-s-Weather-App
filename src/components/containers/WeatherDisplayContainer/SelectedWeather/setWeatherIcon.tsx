import React from 'react';
import Icon from '../../../display/UI/Icon/Icon';
import {
	faSun,
	faCloudSun,
	faCloud,
	faCloudRain,
	faCloudShowersHeavy,
	faCloudSunRain,
	faWind,
	faSmog,
	faCloudMoon,
	faCloudMoonRain,
	faMoon,
	faSnowflake,
} from '@fortawesome/free-solid-svg-icons';

const setWeatherIcon = (isDay: boolean, weatherText: string) => {
	let icon: JSX.Element;
	console.log(isDay);
	console.log(weatherText);

	switch (weatherText) {
		case 'Sunny':
		case 'Mostly Sunny':
		case 'Partly Sunny w/ Flurries':
		case 'Clear':
		case 'Mostly Clear':
			icon = isDay ? (
				<Icon iconType={faSun} size={'7x'}></Icon>
			) : (
				<Icon iconType={faMoon} size={'7x'}></Icon>
			);
			break;

		case 'Hazy Sunshine':
		case 'Partly Sunny':
		case 'Intermittent Clouds':
			icon = isDay ? (
				<Icon iconType={faCloudSun} size={'7x'}></Icon>
			) : (
				<Icon iconType={faCloudMoon} size={'7x'}></Icon>
			);
			break;

		case 'Mostly Cloudy':
		case 'Mostly Cloudy w/ Flurries':
		case 'Cloudy':
		case 'Dreary (Overcast)':
		case 'Partly Cloudy':
			icon = isDay ? (
				<Icon iconType={faCloud} size={'7x'}></Icon>
			) : (
				<Icon iconType={faCloudMoon} size={'7x'}></Icon>
			);
			break;

		case 'Fog':
			icon = <Icon iconType={faSmog} size={'7x'}></Icon>;
			break;

		case 'Rain':
		case 'Sleet':
		case 'Freezing Rain':
		case 'Rain and Snow':
		case 'Mostly Cloudy w/ Showers':
			icon = isDay ? (
				<Icon iconType={faCloudRain} size={'7x'}></Icon>
			) : (
				<Icon iconType={faCloudMoonRain} size={'7x'}></Icon>
			);
			break;

		case 'Partly Sunny w/ Showers':
		case 'Partly Sunny w/ T-Storms':
		case 'Mostly Cloudy w/ T-Storms':
			icon = <Icon iconType={faCloudSunRain} size={'7x'}></Icon>;
			break;

		case 'T-Storms':
			icon = <Icon iconType={faCloudShowersHeavy} size={'7x'}></Icon>;
			break;

		case 'Windy':
			icon = <Icon iconType={faWind} size={'7x'}></Icon>;
			break;

		case 'Snow':
		case 'Ice':
		case 'Mostly Cloudy w/ Snow':
			icon = <Icon iconType={faSnowflake} size={'7x'}></Icon>;
			break;

		default:
			icon = isDay ? (
				<Icon iconType={faCloudSun} size={'7x'}></Icon>
			) : (
				<Icon iconType={faCloudMoon} size={'7x'}></Icon>
			);
			break;
	}

	return icon;
};

export default setWeatherIcon;
