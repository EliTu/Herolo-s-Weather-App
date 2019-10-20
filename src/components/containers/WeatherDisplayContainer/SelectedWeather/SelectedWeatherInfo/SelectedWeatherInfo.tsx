import React from 'react';
import Icon from '../../../../display/UI/Icon/Icon';
import styles from './SelectedWeatherInfo.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Fade } from 'react-bootstrap';

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
	const {
		SelectedWeatherInfoStyles,
		dayStyle,
		dateStyle,
		cityStyle,
		countryStyle,
	} = styles;

	return (
		<div className={SelectedWeatherInfoStyles}>
			{!isLoading && temperature && (
				<Fade in={!isLoading} appear timeout={10000}>
					<>
						<Icon iconType={weatherIconType} size={'9x'} />
						<ul>
							<li>
								<p className={dayStyle}>{day}</p>
								<p className={dateStyle}>{date}</p>
							</li>
							<li>
								<a href={infoLink} className={cityStyle}>
									{cityName},
								</a>
								<p className={countryStyle}>{countryName}</p>
							</li>
						</ul>
					</>
				</Fade>
			)}
		</div>
	);
};

export default SelectedWeatherInfo;
