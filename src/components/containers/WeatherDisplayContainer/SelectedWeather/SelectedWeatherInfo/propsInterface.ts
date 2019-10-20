import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface IProps {
	weatherIconType: IconDefinition;
	isLoading: boolean;
	infoLink: string;
	cityName: string;
	countryName: string;
	day: string;
	date: string;
	temperature: { Metric: { Value: number; Unit: string } };
}
