import React from 'react';
import Layout from './components/containers/Layout/Layout';
import Navbar from './components/display/Navbar/Navbar';
import SearchContainer from './components/containers/SearchContainer/SearchContainer';
import WeatherDisplayContainer from './components/containers/WeatherDisplayContainer/WeatherDIsplayContainer';
import Footer from './components/display/Footer/Footer';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<Layout>
				<Navbar />
				<div className="content-wrapper">
					<SearchContainer />
					<WeatherDisplayContainer />
				</div>
				<Footer />
			</Layout>
		</div>
	);
};

export default App;
