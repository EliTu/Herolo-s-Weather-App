import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fireCurrentWeatherHttpRequest } from '../../WeatherDisplayContainer/store/actions';
import styles from './SearchResults.module.css';
import { ResultListTypes } from '../SearchContainer';

interface IProps {
	resultList: ResultListTypes[];
	searchValue: any;
	isDisplayed: boolean;
	outsideClickRef?: React.RefObject<any>;
	currentWeatherHttpRequest: (key: string) => {};
}

const SearchResults: React.FC<IProps> = ({
	resultList,
	searchValue,
	isDisplayed,
	outsideClickRef,
	currentWeatherHttpRequest,
}) => {
	const { SearchResultsStyles } = styles;

	const handleResultClick = (key: string) => currentWeatherHttpRequest(key);

	return resultList.length > 0 && searchValue.length >= 2 && isDisplayed ? (
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
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
	return {
		currentWeatherHttpRequest: (key: string) =>
			dispatch(fireCurrentWeatherHttpRequest(key)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(SearchResults);
