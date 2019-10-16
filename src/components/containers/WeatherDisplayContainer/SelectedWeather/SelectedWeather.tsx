import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fireCurrentWeatherHttpRequest } from '../store/actions';
import FavIcon from '../../../display/UI/Icon/FavIcon/FavIcon';
import styles from './SelectedWeather.module.css';

interface IProps {
	currentWeatherHttpRequest: (val: string) => void;
}

export const SelectedWeather: React.FC<IProps> = ({
	currentWeatherHttpRequest,
}) => {
	const { SelectedWeatherStyles, testDiv } = styles;

	// On component mount, by default, set and display Tel-Aviv's weather info
	useEffect(() => {
		currentWeatherHttpRequest('215854');
	}, [currentWeatherHttpRequest]);

	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<div className={SelectedWeatherStyles}>
			<div className={testDiv}>Img</div>
			<p>Current weather forcast</p>
			<button>
				<FavIcon isFavorite={isFavorite} />
			</button>
		</div>
	);
};

// Redux setup:
const mapStateToProps = (state: any) => {
	return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
	return {
		currentWeatherHttpRequest: (key: string) =>
			dispatch(fireCurrentWeatherHttpRequest(key)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectedWeather);
