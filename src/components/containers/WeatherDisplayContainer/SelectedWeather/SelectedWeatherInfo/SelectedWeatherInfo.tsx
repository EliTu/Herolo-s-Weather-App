import React from 'react';
import Icon from '../../../../display/UI/Icon/Icon';
import styles from './SelectedWeatherInfo.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IProps {
	weatherIconType: IconDefinition;
	isLoading: boolean;
	infoLink: string;
	cityName: string;
	countryName: string;
	day: string;
	date: string;
	temperature: { Metric: { Value: number; Unit: string } };
}

const SelectedWeatherInfo: React.FC<IProps> = ({
	weatherIconType,
	isLoading,
	infoLink,
	cityName,
	countryName,
	temperature,
	day,
	date,
}) => {
	const { SelectedWeatherInfoStyles } = styles;

	return (
		<div className={SelectedWeatherInfoStyles}>
			{!isLoading && temperature && (
				<>
					<Icon iconType={weatherIconType} size={'7x'} />
					<ul>
						<li>
							<p>{day}</p>
							<p>{date}</p>
						</li>
						<li>
							<a href={infoLink}>{cityName}</a>
							<p>{countryName}</p>
						</li>
						<li>
							{temperature &&
								`${temperature.Metric.Value}${temperature.Metric.Unit}`}
						</li>
					</ul>
				</>
			)}
		</div>
	);
};

export default SelectedWeatherInfo;
