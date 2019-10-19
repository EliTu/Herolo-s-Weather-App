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

const setWeatherIcon = (isDay: boolean, iconNumber: number) => {
	let icon: IconDefinition;

	switch (iconNumber) {
		case 1:
		case 2:
		case 3:
		case 33:
		case 34:
			icon = isDay ? faSun : faMoon;
			break;

		case 5:
		case 21:
		case 36:
			icon = isDay ? faCloudSun : faCloudMoon;
			break;

		case 6:
		case 20:
		case 7:
		case 8:
		case 35:
		case 38:
			icon = isDay ? faCloud : faCloudMoon;
			break;

		case 11:
			icon = faSmog;
			break;

		case 18:
		case 19:
		case 25:
		case 26:
		case 29:
		case 39:
		case 40:
			icon = isDay ? faCloudRain : faCloudMoonRain;
			break;

		case 14:
		case 17:
		case 16:
			icon = faCloudSunRain;
			break;

		case 15:
			icon = faCloudShowersHeavy;
			break;

		case 32:
			icon = faWind;
			break;

		case 22:
		case 24:
		case 23:
			icon = faSnowflake;
			break;

		default:
			icon = isDay ? faCloudSun : faCloudMoon;
			break;
	}
	return icon;
};

export default setWeatherIcon;
