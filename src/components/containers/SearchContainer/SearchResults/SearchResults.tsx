import React, { ReactText } from 'react';
import styles from './SearchResults.module.css';

interface IProps {
	resultList: { LocalizedName: string; Key: string }[];
	searchValue: string | ReactText;
	isDisplayed: boolean;
}

const SearchResults: React.FC<IProps> = ({
	resultList,
	searchValue,
	isDisplayed,
}) => {
	const { SearchResultsStyles } = styles;
	return isDisplayed ? (
		<div className={SearchResultsStyles}>
			<ul>
				{resultList.map(result => (
					<li key={result.Key}>{result.LocalizedName}</li>
				))}
			</ul>
		</div>
	) : null;
};

export default SearchResults;
