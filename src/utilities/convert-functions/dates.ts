// Take an UNIX epoch date value and convert it to a day of the week string:
export const getDayOfTheWeek = (epochDate: number, i?: number): string => {
	const date = new Date(epochDate * 1000);
	const dayOfWeekV = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	let day =
		i === 0
			? `${dayOfWeekV[date.getDay()]} (Today)`
			: i === 1
			? `${dayOfWeekV[date.getDay()]} (Tomorrow)`
			: dayOfWeekV[date.getDay()];

	return day;
};

// Take a YYYY-MM-DD format and convert it to DD-MM-YYYY format:
export const getCorrectDateFormat = (dateString: string): string => {
	const splitDate: string = dateString.split('T')[0];
	const parsedDate: string = splitDate
		.split('-')
		.reverse()
		.join('/');

	return parsedDate;
};
