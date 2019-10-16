import React from 'react';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
	const { Loader } = styles;
	return <div className={Loader}></div>;
};

export default Loader;
