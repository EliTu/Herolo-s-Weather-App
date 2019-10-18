import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/containers/Layout/Layout';
import Navbar from './components/display/Navbar/Navbar';
import WeatherContent from './components/containers/WeatherContent/WeatherContent';
import Footer from './components/display/Footer/Footer';
import './App.css';
import LazyLoader from './utilities/hoc/LazyLoader';

// Lazy loading imports:
const Favorites = lazy(() =>
	import('./components/containers/Favorites/Favorites')
);

export const App: React.FC = () => {
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

export default App;
