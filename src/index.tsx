import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, Reducer } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './store/appReducer';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Enabling the Redux Dev tools for development mode:
const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store: (reducer: Reducer, composeEnhance: any) => void = createStore(
// 	appReducer,
// 	composeEnhancers
// );

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
