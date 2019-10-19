export interface IProps {
	favorites: { key: string; cityName: string; countryName: string }[];
	favoritesWeatherData: {
		key: string;
		cityName: string;
		countryName: string;
		WeatherText: string;
		Temperature: { Metric: { Value: number; Unit: string } };
	}[];
	getFavoritesWeatherData: (
		key: string,
		countryName: string,
		cityName: string,
		dispatchIdentifier: string
	) => void;
	history: any;
	getClickedItemWeatherCurrentData: (
		key: string,
		countryName: string,
		cityName: string,
		dispatchIdentifier: string
	) => void;
	getClickedItemFiveDaysForecast: (key: string) => void;
}
