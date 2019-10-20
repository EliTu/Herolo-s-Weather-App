export interface IProps {
	setNewFavoriteItem: (
		key: string,
		cityName: string,
		countryName: string
	) => void;
	removeFromFavorites: (key: string) => void;
	favoritesList: string[];
	weatherData: {
		LocalObservationDateTime: string;
		EpochTime: number;
		WeatherText: string;
		WeatherIcon: number;
		IsDayTime: boolean;
		Link: string;
		Temperature: {
			Metric: {
				Value: number;
				Unit: string;
			};
		};
		cityName: string;
		countryName: string;
		key: string;
	};
	isLoading: boolean;
	initFavorites: () => void;
}
