import React, { memo } from 'react';
import { connect } from 'react-redux';
import Card from '../../../display/UI/Card/Card';
import {
	setCorrectDateFormat,
	setDayOfTheWeek,
} from '../../../../utilities/convert-functions/dates';
import fahrenheitToCelsius from '../../../../utilities/convert-functions/fahrenheitToCelsius';
import styles from './FiveDaysForecast.module.css';

interface IProps {
	forecastResults: {
		EpochDate: number;
		Date: string;
		Temperature: {
			Minimum: { Value: number; Unit: string };
			Maximum: { Value: number; Unit: string };
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
					let day = setDayOfTheWeek(EpochDate);
					day =
						i === 0
							? `${day} (Today)`
							: i === 1
							? `${day} (Tomorrow)`
							: day;

					const { Value: maxVal } = Temperature.Minimum;
					const maxCelsiusVal: number = fahrenheitToCelsius(maxVal);
					const maxTemp: number = maxCelsiusVal;

					const { Value: minVal } = Temperature.Maximum;
					const minCelsiusVal: number = fahrenheitToCelsius(minVal);
					const minTemp: number = minCelsiusVal;

					// Get the weather text:
					const { IconPhrase } = Day;

					// Get the DD-MM-YYYY date format:
					const date = setCorrectDateFormat(Date);

					return (
						
							<Card
								key={EpochDate}
								mainHeading={day}
								date={date}
								maxValue={maxTemp}
								minValue={minTemp}
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

export default connect(mapStateToProps)(memo(FiveDaysForecast));
