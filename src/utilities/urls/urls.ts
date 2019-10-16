import axios from 'axios';

// Set an async axios GET request based on the requestType:
const setAsyncGetRequest = (inputVal: string, requestType: string) => {
	// Accuweather API key (Innsecure on this app):
	const apiKey: string = '0Gub8jwlpiFGj7JYWAu9h9cGby8MnSAz';
	let url;
	let params;

	switch (requestType) {
		case 'search':
			url =
				'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
			params = `?apikey=${apiKey}&q=${inputVal}&language=en-us HTTP/1.1`;
			break;
		case 'currentWeather':
			url = 'http://dataservice.accuweather.com/currentconditions/v1/';
			params = `${inputVal}?apikey=${apiKey}&language=en-us&details=true HTTP/1.1`;
			break;
		default:
			url = '';
	}

	return axios.get(`${url}${params}`);
};

export default setAsyncGetRequest;
