import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/containers/Layout/Layout';
import Navbar from './components/display/Navbar/Navbar';
import WeatherContent from './components/containers/WeatherContent/WeatherContent';
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
