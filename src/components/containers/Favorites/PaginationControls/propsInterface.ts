export interface IProps {
	pages: number[];
	pageNumberClick: (event: any) => void;
	nextPageClick: () => void;
	previousPageClick: () => void;
	firstPageClick: () => void;
	lastPageClick: () => void;
	currentPage: number;
}
