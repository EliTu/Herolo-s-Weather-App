import axios from 'axios';

// Set an async axios GET request based on the requestType:
const setAsyncGetRequest = (inputVal: string, requestType: string) => {
	// Accuweather API key (not secure):
	// const apiKey: string = '0Gub8jwlpiFGj7JYWAu9h9cGby8MnSAz'; USED 16/10 21:30
	// const apiKey: string = 'ZAxbVbnyjicI2eYgKvelofbyjx5JkQH6'; USED 17/10 19:30
	const apiKey: string = 'bQFmIaGAuAGNf2crw9dvL8B2vaECPkAP';

	let url: string;
	let params: string;

	switch (requestType) {
		case 'search':
			url =
				'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
			params = `?apikey=${apiKey}&q=${inputVal}&language=en-us HTTP/1.1`;
			break;
		case 'currentWeather':
			url = 'http://dataservice.accuweather.com/currentconditions/v1/';
			params = `${inputVal}?apikey=${apiKey}&language=en-us HTTP/1.1`;
			break;
		case 'fiveDaysForecast':
			url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
			params = `${inputVal}?apikey=${apiKey}&language=en-us&metric=true HTTP/1.1`;
			break;
		default:
			url = '';
			params = '';
	}

	return axios.get(`${url}${params}`);
};

export default setAsyncGetRequest;
