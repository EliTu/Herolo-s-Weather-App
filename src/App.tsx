import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/containers/Layout/Layout';
import Navbar from './components/display/Navbar/Navbar';
import WeatherContent from './components/containers/WeatherContent/WeatherContent';
import Footer from './components/display/Footer/Footer';
import './App.css';
import LazyLoader from './utilities/hoc/LazyLoader';
import { fireCurrentWeatherHttpRequest } from './components/containers/WeatherDisplayContainer/store/actions';
import { fireFiveDaysForecastHttpRequest } from './components/containers/WeatherDisplayContainer/store/actions';
import { initFavoritesAction } from './components/containers/Favorites/store/actions';

// Lazy loading imports:
const Favorites = lazy(() =>
	import('./components/containers/Favorites/Favorites')
);
const About = lazy(() => import('./components/display/About/About'));

interface IProps {
	initFavoritesList: () => void;
	setDefaultWeatherData: (
		val: string,
		cityName: string,
		countryName: string,
		dispatchIdentifier: string
	) => void;
	setDefaultFiveDaysForecast: (key: string) => void;
}

export const App: React.FC<IProps> = ({
	initFavoritesList,
	setDefaultWeatherData,
	setDefaultFiveDaysForecast,
}) => {
	// On component mount, get the localStorage favorite list:
	useEffect(() => {
		initFavoritesList();
	}, [initFavoritesList]);

	// On component mount, by default, set and display Tel-Aviv's weather info
	useEffect(() => {
		setDefaultWeatherData('215854', 'Tel-Aviv', 'Israel', 'currentWeather');
		setDefaultFiveDaysForecast('215854');
	}, [setDefaultFiveDaysForecast, setDefaultWeatherData]);

	return (
		<div className="App">
			<Router>
				<Layout>
					<Navbar />
					<div className="content-wrapper">
						<Switch>
							<Route
								path="/favorites"
								component={LazyLoader(Favorites)}
							/>
							<Route
								path="/about"
								componenet={LazyLoader(About)}
							/>
							<Route path="/" component={WeatherContent} />
						</Switch>
					</div>
					<Footer />
				</Layout>
			</Router>
		</div>
	);
};

// Redux setup:
const mapDispatchToProps = (dispatch: any) => {
	return {
		initFavoritesList: () => dispatch(initFavoritesAction()),
		setDefaultWeatherData: (
			key: string,
			cityName: string,
			countryName: string
		) =>
			dispatch(
				fireCurrentWeatherHttpRequest(
					key,
					'currentWeather',
					cityName,
					countryName
				)
			),
		setDefaultFiveDaysForecast: (key: string) =>
			dispatch(fireFiveDaysForecastHttpRequest(key)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(App);
