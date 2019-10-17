import React from 'react';
import { connect } from 'react-redux';
import ForecastCard from './ForecastCard/ForecastCard';
import getDayOfTheWeek from './getDayOfTheWeek';
import styles from './FiveDaysForecast.module.css';

interface IProps {
	forecastResults: {
		EpochDate: number;
		Date: string;
		Minimum: { Value: number; Unit: string };
		Maximum: { Value: Number; Unit: string };
		Day: { IconPhrase: string };
		Link: string;
	}[];
}

export const FiveDaysForecast: React.FC<IProps> = ({ forecastResults }) => {
	const { FiveDaysForecastStyles } = styles;

	return (
		<div className={FiveDaysForecastStyles}>
			<ul>
				{forecastResults.map(result => {
					const day = getDayOfTheWeek(result.EpochDate);
					return (
						<ForecastCard
							mainHeading={day}
							date={result.Date}
							maxTempData={result.Maximum}
							minTempData={result.Minimum}
							description={result.Day.IconPhrase}
							link={result.Link}
						/>
					);
				})}
			</ul>
		</div>
	);
};

// Redux setup:
const mapStateToProps = (state: any) => {
	return {
		forecastResults: state.fiveDaysForecast.resultList,
	};
};

export default connect(mapStateToProps)(FiveDaysForecast);
