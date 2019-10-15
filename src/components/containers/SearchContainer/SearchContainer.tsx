import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Input from '../../display/UI/Input/Input';
import Icon from '../../display/UI/Icon/Icon';
import SearchResults from './SearchResults/SearchResults';
import { inputTemplateData } from './searchInputTemplate';
import { fireSearchHttpRequest } from './store/actions';
import useClickOutside from '../../../utilities/custom-hooks/useOutsideClick';
import styles from './SearchContainer.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export type ResultListTypes = {
	LocalizedName: string;
	Key: string;
	Country: { LocalizedName: string };
	AdministrativeArea: { ID: string };
};

interface IProps {
	httpRequest: (val: any) => void;
	searchResultList: ResultListTypes[];
}

export const SearchContainer: React.FC<IProps> = ({
	httpRequest,
	searchResultList,
}) => {
	const { SearchContainerStyles, InputWrapper } = styles;

	const [inputData, setInputData] = useState(inputTemplateData);
	const [areResultsDisplayed, setAreResultsDisplayed] = useState(false);

	const handleSearchInputChange: (e: any) => void = (event: any) => {
		const updatedValue: string = event.target.value;
		const updatedSearchInput = {
			...inputTemplateData,
			value: updatedValue,
		};

		setInputData(() => updatedSearchInput);
		setAreResultsDisplayed(() => true);
	};

	// Set a timer for limiting the amount of HTTP requests upon changes in the input value:
	useEffect(() => {
		const keyStrokeTimer: NodeJS.Timeout = setTimeout(() => {
			httpRequest(inputData.value);
		}, 500);
		return () => clearTimeout(keyStrokeTimer);
	}, [httpRequest, inputData.value]);

	// Set the isDisplayed to false if the value passed in the Input is an empty string
	useEffect(() => {
		if (!inputData.value) setAreResultsDisplayed(() => false);
	}, [inputData.value]);

	// Set the isDisplayed to false upon clicking outside of the SearchResults component scope
	const onOutsideClick = () => setAreResultsDisplayed(() => false);
	const outsideClickRef: React.RefObject<any> = useClickOutside(
		areResultsDisplayed,
		onOutsideClick
	);

	return (
		<div className={SearchContainerStyles}>
			<div className={InputWrapper}>
				<Icon iconType={faSearch} size={'2x'} />
				<Input
					elementType={inputData.elementType}
					elementConfig={{ ...inputData.elementConfig }}
					value={inputData.value}
					isFocused={inputData.isFocused}
					handleChange={event => handleSearchInputChange(event)}
				/>
			</div>
			<SearchResults
				resultList={searchResultList}
				searchValue={inputData.value}
				isDisplayed={areResultsDisplayed}
				outsideClickRef={outsideClickRef}
			/>
		</div>
	);
};

// Redux state & dispatch setup:
const mapStateToProps = (state: any) => {
	return {
		searchResultList: state.search.results,
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
	return {
		httpRequest: (val: string) => dispatch(fireSearchHttpRequest(val)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchContainer);
