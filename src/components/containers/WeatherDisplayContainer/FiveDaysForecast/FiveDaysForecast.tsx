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
				{forecastResults.map(
					({ EpochDate, Date, Minimum, Maximum, Day, Link }) => {
						const day = getDayOfTheWeek(EpochDate);

						const { Value: maxVal, Unit: maxUnit } = Minimum;
						const maxTemp = `${maxVal} ${maxUnit}`;

						const { Value: minVal, Unit: minUnit } = Maximum;
						const minTemp = `${minVal} ${minUnit}`;

						const { IconPhrase } = Day;
						return (
							<ForecastCard
								mainHeading={day}
								date={Date}
								maxTempData={maxTemp}
								minTempData={minTemp}
								description={IconPhrase}
								link={Link}
							/>
						);
					}
				)}
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
