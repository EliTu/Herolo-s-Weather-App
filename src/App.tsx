import React from 'react';
import Layout from './components/containers/Layout/Layout';
import Navbar from './components/stateless/Navbar/Navbar';
import SearchContainer from './components/containers/SearchContainer/SearchContainer';
import WeatherDIsplayContainer from './components/containers/WeatherDisplayContainer/WeatherDIsplayContainer';
import Footer from './components/stateless/Footer/Footer';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<Layout>
				<Navbar />
				<div className="content-wrapper">
					<SearchContainer />
					<WeatherDIsplayContainer />
				</div>
				<Footer />
			</Layout>
		</div>
	);
};

export default App;
