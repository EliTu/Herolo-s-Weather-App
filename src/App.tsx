import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/containers/Layout/Layout';
import Navbar from './components/display/Navbar/Navbar';
import SearchContainer from './components/containers/SearchContainer/SearchContainer';
import WeatherDisplayContainer from './components/containers/WeatherDisplayContainer/WeatherDIsplayContainer';
import Footer from './components/display/Footer/Footer';
import './App.css';

export const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Navbar />
					<div className="content-wrapper">
						<Switch>
							<Route path="/favorites" />
							<Route path="/about" />
							<Route path="/" component={SearchContainer} />
							<Route
								path="/"
								component={WeatherDisplayContainer}
							/>
						</Switch>
					</div>
					<Footer />
				</Layout>
			</Router>
		</div>
	);
};

export default App;
