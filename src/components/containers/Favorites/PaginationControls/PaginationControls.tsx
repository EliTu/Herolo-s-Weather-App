import React from 'react';
import styles from './PaginationControls.module.css';
import Icon from '../../../display/UI/Icon/Icon';
import {
	faAngleRight,
	faAngleLeft,
	faAngleDoubleRight,
	faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { IProps } from './propsInterface';

const PaginationControls: React.FC<IProps> = ({
	pages,
	pageNumberClick,
	nextPageClick,
	previousPageClick,
	firstPageClick,
	lastPageClick,
	currentPage,
}) => {
	// CSS Modules styles:
	const { OrderPaginationPanel, pageContainer, activePageStyle } = styles;

	return (
		<div className={OrderPaginationPanel}>
			<button onClick={firstPageClick}>
				<Icon iconType={faAngleDoubleLeft} size="2x" />
			</button>
			<button onClick={previousPageClick}>
				<Icon iconType={faAngleLeft} size="2x" />
			</button>
			<div className={pageContainer}>
				{pages.map(page => (
					<button
						className={page === currentPage ? activePageStyle : ''}
						key={page}
						pageId={page}
						onClick={event => pageNumberClick(event)}
					>
						{page}
					</button>
				))}
			</div>
			<button onClick={nextPageClick}>
				<Icon iconType={faAngleRight} size="2x" />
			</button>
			<button onClick={lastPageClick}>
				<Icon iconType={faAngleDoubleRight} size="2x" />
			</button>
		</div>
	);
};

export default PaginationControls;
