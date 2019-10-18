import React from 'react';
import SearchComponent from '../SearchContainer/SearchContainer';
import WeatherDisplayContainer from '../WeatherDisplayContainer/WeatherDIsplayContainer';

const WeatherContent: React.FC = () => {
	return (
		<>
			<SearchComponent />
			<WeatherDisplayContainer />
		</>
	);
};

export default WeatherContent;
