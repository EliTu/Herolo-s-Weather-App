import React from 'react';
import { connect } from 'react-redux';
import Card from '../../../display/UI/Card/Card';
import getDayOfTheWeek from './getDayOfTheWeek';
import styles from './FiveDaysForecast.module.css';

interface IProps {
	forecastResults: {
		EpochDate: number;
		Date: any;
		Temperature: {
			Minimum: { Value: number; Unit: string };
			Maximum: { Value: Number; Unit: string };
		};
		Day: { IconPhrase: string };
		Link: string;
	}[];
}

export const FiveDaysForecast: React.FC<IProps> = ({ forecastResults }) => {
	const { FiveDaysForecastStyles } = styles;

	return (
		<div className={FiveDaysForecastStyles}>
			{forecastResults.map(
				({ EpochDate, Date, Temperature, Day, Link }, i) => {
					// Convert EpochDate into a day of the week string:
					const day = getDayOfTheWeek(EpochDate, i);

					const {
						Value: maxVal,
						Unit: maxUnit,
					} = Temperature.Minimum;
					const maxTemp = `${maxVal} ${maxUnit}`;

					const {
						Value: minVal,
						Unit: minUnit,
					} = Temperature.Maximum;
					const minTemp = `${minVal} ${minUnit}`;

					// Get the weather text:
					const { IconPhrase } = Day;

					// Get the DD-MM-YYYY date format:
					const splitDate: string = Date.split('T')[0];
					const parsedDate: string = splitDate
						.split('-')
						.reverse()
						.join('/');

					return (
						<Card
							key={EpochDate}
							mainHeading={day}
							date={parsedDate}
							maxTempData={maxTemp}
							minTempData={minTemp}
							description={IconPhrase}
							link={Link}
						/>
					);
				}
			)}
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
