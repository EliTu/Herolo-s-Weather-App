import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/containers/Layout/Layout';
import Navbar from './components/display/Navbar/Navbar';
import WeatherContent from './components/containers/WeatherContent/WeatherContent';
import Footer from './components/display/Footer/Footer';
import './App.css';
import LazyLoader from './utilities/hoc/LazyLoader';
import { initFavoritesAction } from './components/containers/Favorites/store/actions';

// Lazy loading imports:
const Favorites = lazy(() =>
	import('./components/containers/Favorites/Favorites')
);

interface IProps {
	initFavoritesList: () => void;
}

export const App: React.FC<IProps> = ({ initFavoritesList }) => {
	useEffect(() => {
		initFavoritesList();
	}, [initFavoritesList]);

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
							<Route path="/about" />
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
		initFavoritesList: dispatch(initFavoritesAction()),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(App);
