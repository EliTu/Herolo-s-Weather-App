import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
	createStore,
	combineReducers,
	Store,
	Reducer,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './components/containers/SearchContainer/store/searchReducer';
import { App } from './App';
import currentWeatherReducer from './components/containers/WeatherDisplayContainer/store/currentWeatherReducer';
import fiveDaysForecastReducer from './components/containers/WeatherDisplayContainer/store/fiveDaysForecastReducer';
import favoritesReducer from './components/containers/Favorites/store/favoritesReducer';

it('renders without crashing', () => {
	const div = document.createElement('div');

	const rootReducer: Reducer = combineReducers({
		search: searchReducer,
		currentWeather: currentWeatherReducer,
		fiveDaysForecast: fiveDaysForecastReducer,
		favorites: favoritesReducer,
	});

	const store: Store = createStore(rootReducer, applyMiddleware(thunk));

	ReactDOM.render(
		<Provider store={store}>
			<App
				initFavoritesList={() => []}
				setDefaultWeatherData={() => {}}
				setDefaultFiveDaysForecast={() => {}}
			/>
		</Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
