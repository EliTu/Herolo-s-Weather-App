import React, { PropsWithChildren, ReactText } from 'react';
import styles from './SearchResults.module.css';

interface IProps {
	resultList: {}[];
	searchValue: string | ReactText;
	isDisplayed: boolean;
}

const SearchResults: React.FC<IProps> = ({
	resultList,
	searchValue,
	isDisplayed,
}) => {
	const { SearchResultsStyles } = styles;
	return <div className={SearchResultsStyles}></div>;
};

export default SearchResults;
