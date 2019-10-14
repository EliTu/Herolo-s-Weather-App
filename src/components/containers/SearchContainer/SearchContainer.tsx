import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../stateless/UI/Input/Input';
import Button from '../../stateless/UI/Button/Button';
import Icon from '../../stateless/UI/Icon/Icon';
import { inputTemplateData } from './searchInputTemplate';
import { fireSearchHttpRequest } from './store/actions';
import { ThunkDispatch } from 'redux-thunk';
import styles from './SearchContainer.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface IProps {
	httpRequest: (val: any) => void;
}

const SearchContainer: React.FC<IProps> = ({ httpRequest }) => {
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
			<Button handleButtonClick={handleSearchSubmission}>Search</Button>
		</div>
	);
};

// Redux connect setup:
// const mapStateToProps = (state) => {
// 	return {

// 	};
// };

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
	return {
		httpRequest: (val: string) => dispatch(fireSearchHttpRequest(val)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(SearchContainer);
