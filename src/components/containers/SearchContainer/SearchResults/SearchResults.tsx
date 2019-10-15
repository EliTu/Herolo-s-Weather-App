import React from 'react';
import styles from './SearchResults.module.css';

interface IProps {
	resultList: { LocalizedName: string; Key: string }[];
	searchValue: any;
	isDisplayed: boolean;
}

const SearchResults: React.FC<IProps> = ({
	resultList,
	searchValue,
	isDisplayed,
}) => {
	const { SearchResultsStyles } = styles;
	return isDisplayed || searchValue.length > 2 ? (
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
