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
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

const setWeatherIcon = (isDay: boolean, weatherText: string) => {
	let icon: IconDefinition;

	switch (weatherText) {
		case 'Sunny':
		case 'Mostly Sunny':
		case 'Partly Sunny w/ Flurries':
		case 'Clear':
		case 'Mostly Clear':
			icon = isDay ? faSun : faMoon;
			break;

		case 'Hazy Sunshine':
		case 'Partly Sunny':
		case 'Intermittent Clouds':
			icon = isDay ? faCloudSun : faCloudMoon;
			break;

		case 'Mostly Cloudy':
		case 'Mostly Cloudy w/ Flurries':
		case 'Cloudy':
		case 'Dreary (Overcast)':
		case 'Partly Cloudy':
			icon = isDay ? faCloud : faCloudMoon;
			break;

		case 'Fog':
			icon = faSmog;
			break;

		case 'Rain':
		case 'Sleet':
		case 'Freezing Rain':
		case 'Rain and Snow':
		case 'Mostly Cloudy w/ Showers':
			icon = isDay ? faCloudRain : faCloudMoonRain;

			break;

		case 'Partly Sunny w/ Showers':
		case 'Partly Sunny w/ T-Storms':
		case 'Mostly Cloudy w/ T-Storms':
			icon = faCloudSunRain;
			break;

		case 'T-Storms':
			icon = faCloudShowersHeavy;
			break;

		case 'Windy':
			icon = faWind;
			break;

		case 'Snow':
		case 'Ice':
		case 'Mostly Cloudy w/ Snow':
			icon = faSnowflake;
			break;

		default:
			icon = isDay ? faCloudSun : faCloudMoon;
			break;
	}
	return icon;
};

export default setWeatherIcon;
