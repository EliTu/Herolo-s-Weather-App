import React, { useState, Reducer, ReducerState } from 'react';
import { connect } from 'react-redux';
import Input from '../../stateless/UI/Input/Input';
// import Button from '../../stateless/UI/Button/Button';
import Icon from '../../stateless/UI/Icon/Icon';
import { SearchResult } from './store/types';
import SearchResults from './SearchResults/SearchResults';
import { inputTemplateData } from './searchInputTemplate';
import { fireSearchHttpRequest } from './store/actions';
import { ThunkDispatch } from 'redux-thunk';
import styles from './SearchContainer.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface IProps {
	httpRequest: (val: any) => void;
	searchResultList: {}[];
}

export const SearchContainer: React.FC<IProps> = ({
	httpRequest,
	searchResultList,
}) => {
	const { SearchContainerStyles, InputWrapper } = styles;

	const [inputData, setInputData] = useState(inputTemplateData);

	const handleSearchInputChange: (e: any) => void = (event: any) => {
		const updatedValue: string = event.target.value;
		const updatedSearchInput = {
			...inputTemplateData,
			value: updatedValue,
		};

		setInputData(() => updatedSearchInput);
	};
	const handleSearchSubmission = () => {
		httpRequest(inputData.value);
	};

	return (
		<div className={SearchContainerStyles}>
			<div className={InputWrapper}>
				<Icon iconType={faSearch} size={'2x'} />
				<Input
					elementType={inputData.elementType}
					elementConfig={{ ...inputData.elementConfig }}
					value={inputData.value}
					validation={{ ...inputData.validation }}
					isFocused={inputData.isFocused}
					handleChange={event => handleSearchInputChange(event)}
					handleEnterPress={handleSearchSubmission}
				/>
			</div>
			<SearchResults
				resultList={[]}
				searchValue={inputData.value}
				isDisplayed={false}
			/>
			{/* <Button handleButtonClick={handleSearchSubmission}>Search</Button> */}
		</div>
	);
};

// Redux state & dispatch setup:
const mapStateToProps = (state: SearchResult) => {
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
