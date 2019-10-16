import {
	FiveDaysForecastInitState,
	FIVE_DAYS_FORECAST_INIT,
	FIVE_DAYS_FORECAST_SUCCESS,
	FIVE_DAYS_FORECAST_FAIL,
	FiveDaysForecastActionTypes,
} from './types';

const INITIAL_STATE: FiveDaysForecastInitState = {
	resultList: [],
	error: '',
	isLoading: false,
};

const fiveDaysForecastReducer = (
	state = INITIAL_STATE,
	action: FiveDaysForecastActionTypes
): FiveDaysForecastInitState => {
	switch (action.type) {
		case FIVE_DAYS_FORECAST_INIT:
			return {
				...state,
				isLoading: true,
				error: '',
				resultList: [],
			};
		case FIVE_DAYS_FORECAST_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: '',
				resultList: [...action.fiveDaysForecastResults],
			};
		case FIVE_DAYS_FORECAST_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.error,
				resultList: [],
			};
		default:
			return state;
	}
};

export default fiveDaysForecastReducer;
