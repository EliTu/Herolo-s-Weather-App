import React from 'react';
import Navbar from './components/stateless/Navbar/Navbar';
import Layout from './components/containers/Layout/Layout';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<Layout>
				<Navbar />
			</Layout>
		</div>
	);
};

export default App;
