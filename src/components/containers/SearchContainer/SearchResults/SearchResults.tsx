import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fireCurrentWeatherHttpRequest } from '../../WeatherDisplayContainer/store/actions';
import { fireFiveDaysForecastHttpRequest } from '../../WeatherDisplayContainer/store/actions';
import { closeSearchResultsList } from '../store/actions';
import styles from './SearchResults.module.css';
import { ResultListTypes } from '../SearchContainer';

interface IProps {
	resultList: ResultListTypes[];
	searchValue: any;
	isDisplayed: boolean;
	error: string;
	outsideClickRef?: React.RefObject<any>;
	currentWeatherHttpRequest: (key: string) => void;
	fiveDaysForecastHttpRequest: (key: string) => void;
	closeResultsList: () => void;
}

export const SearchResults: React.FC<IProps> = ({
	resultList,
	searchValue,
	isDisplayed,
	error,
	outsideClickRef,
	currentWeatherHttpRequest,
	fiveDaysForecastHttpRequest,
	closeResultsList,
}) => {
	const { SearchResultsStyles } = styles;

	const handleResultClick = (key: string) => {
		// currentWeatherHttpRequest(key);
		fiveDaysForecastHttpRequest(key);
		closeResultsList();
	};

	return resultList.length > 0 &&
		searchValue.length >= 2 &&
		isDisplayed &&
		!error ? (
		<div className={SearchResultsStyles} ref={outsideClickRef}>
			<ul>
				{resultList.map(result => (
					<li
						key={result.Key}
						onClick={key => handleResultClick(result.Key)}
					>{`${result.LocalizedName}, ${result.AdministrativeArea.ID}, ${result.Country.LocalizedName}`}</li>
				))}
			</ul>
		</div>
	) : null;
};

// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		isDisplayed: state.search.areResultsDisplayed,
		error: state.search.error,
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
	return {
		currentWeatherHttpRequest: (key: string) =>
			dispatch(fireCurrentWeatherHttpRequest(key)),
		fiveDaysForecastHttpRequest: (key: string) =>
			dispatch(fireFiveDaysForecastHttpRequest(key)),
		closeResultsList: () => dispatch(closeSearchResultsList()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResults);
