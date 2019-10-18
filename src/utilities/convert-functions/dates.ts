// Take an UNIX epoch date value and convert it to a day of the week string:
export const setDayOfTheWeek = (epochDate: number): string => {
	const date = new Date(epochDate * 1000);
	const dayOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	let day = dayOfWeek[date.getDay()];
	return day;
};

// Take a YYYY-MM-DD format and convert it to DD/MM/YYYY format:
export const setCorrectDateFormat = (dateString: string): string => {
	const splitDate: string = dateString.split('T')[0];
	const parsedDate: string = splitDate
		.split('-')
		.reverse()
		.join('/');

	return parsedDate;
};
