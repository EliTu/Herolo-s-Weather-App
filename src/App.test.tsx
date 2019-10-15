import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, Store, Reducer } from 'redux';
import searchReducer from './components/containers/SearchContainer/store/searchReducer';
import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');

	const rootReducer: Reducer = combineReducers({
		search: searchReducer,
	});

	const store: Store = createStore(rootReducer);

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
