import React from 'react';
import Layout from './components/containers/Layout/Layout';
import Navbar from './components/stateless/Navbar/Navbar';
import Footer from './components/stateless/Footer/Footer';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<Layout>
				<Navbar />
				<div className="content-wrapper"></div>
				<Footer />
			</Layout>
		</div>
	);
};

export default App;
