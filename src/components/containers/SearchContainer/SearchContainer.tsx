import React, { useState } from 'react';
import Input from '../../stateless/UI/Input/Input';
import { inputTemplateData } from './searchInputTemplate';
import styles from './SearchContainer.module.css';

const SearchContainer: React.FC = () => {
	const { SearchContainerStyles } = styles;

	const [inputData, setInputData] = useState(inputTemplateData);

	const handleSearchInputChange = (event: any) => {
		setInputData(() => (inputData.value = event.target.value));
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
		</div>
	);
};

export default SearchContainer;
