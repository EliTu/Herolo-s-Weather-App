import React, { useState } from 'react';
import Input from '../../stateless/UI/Input/Input';
import Button from '../../stateless/UI/Button/Button';
import { inputTemplateData } from './searchInputTemplate';
import styles from './SearchContainer.module.css';

const SearchContainer: React.FC = () => {
	const { SearchContainerStyles } = styles;

	const [inputData, setInputData] = useState(inputTemplateData);

	const handleSearchInputChange: (e: any) => void = (event: any) => {
		const updatedValue: string = event.target.value;
		const updatedSearchInput = {
			...inputTemplateData,
			value: updatedValue,
		};

		setInputData(() => updatedSearchInput);
	};
	const handleSearchSubmission = () => {};

	return (
		<div className={SearchContainerStyles}>
			<Input
				elementType={inputData.elementType}
				elementConfig={{ ...inputData.elementConfig }}
				value={inputData.value}
				validation={{ ...inputData.validation }}
				isFocused={inputData.isFocused}
				handleChange={event => handleSearchInputChange(event)}
				handleEnterPress={handleSearchSubmission}
			/>
			<Button>Search</Button>
		</div>
	);
};

export default SearchContainer;
