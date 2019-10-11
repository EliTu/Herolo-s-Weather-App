import React from 'react';
import Navbar from './components/stateless/Navbar/Navbar';
import Layout from './components/containers/Layout/Layout';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<Layout>
				<Navbar />
				<div className="Wrapper"></div>
			</Layout>
		</div>
	);
};

export default App;
