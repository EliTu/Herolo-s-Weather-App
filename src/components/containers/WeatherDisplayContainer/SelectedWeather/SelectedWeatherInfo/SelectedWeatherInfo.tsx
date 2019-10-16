import React from 'react';
import Icon from '../../../../display/UI/Icon/Icon';
import styles from './SelectedWeatherInfo.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IProps {
	weatherIconType: IconDefinition;
	isLoading: boolean;
	infoLink: string;
	localName: string;
	temperature: { Metric: { Value: number; Unit: string } };
}

const SelectedWeatherInfo: React.FC<IProps> = ({
	weatherIconType,
	isLoading,
	infoLink,
	localName,
	temperature,
}) => {
	const { selectedWeatherInfoStyles } = styles;
	return (
		<div className={selectedWeatherInfoStyles}>
			{!isLoading && <Icon iconType={weatherIconType} size={'7x'} />}
			<ul>
				<li>
					<a href={infoLink}>{!localName ? 'Tel-Aviv' : localName}</a>
				</li>
				<li>
					{temperature &&
						`${temperature.Metric.Value} ${temperature.Metric.Unit}`}
				</li>
			</ul>
		</div>
	);
};

export default SelectedWeatherInfo;
