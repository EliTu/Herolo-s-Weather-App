import React from 'react';
import Icon from '../../../../display/UI/Icon/Icon';
import styles from './SelectedWeatherInfo.module.css';
import { IProps } from './propsInterface';

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
			)}
		</div>
	);
};

export default SelectedWeatherInfo;
