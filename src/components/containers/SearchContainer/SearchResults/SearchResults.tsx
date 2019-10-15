import React from 'react';
import styles from './SearchResults.module.css';
import { ResultListTypes } from '../SearchContainer';

interface IProps {
	resultList: ResultListTypes[];
	searchValue: any;
	isDisplayed: boolean;
}

const SearchResults: React.FC<IProps> = ({ resultList, searchValue }) => {
	const { SearchResultsStyles } = styles;
	return resultList.length > 0 && searchValue.length >= 2 ? (
		<div className={SearchResultsStyles}>
			<ul>
				{resultList.map(result => (
					<li
						key={result.Key}
					>{`${result.LocalizedName}, ${result.AdministrativeArea.ID}, ${result.Country.LocalizedName}`}</li>
				))}
			</ul>
		</div>
	) : null;
};

export default SearchResults;
