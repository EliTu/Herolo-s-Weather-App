const getDayOfTheWeek = (epochDate: number) => {
	// const days = [
	// 	'Sunday',
	// 	'Monday',
	// 	'Tuesday',
	// 	'Wednesday',
	// 	'Thursday',
	// 	'Friday',
	// 	'Saturday',
	// ];
	// let d = new Date(year, --month, day);
	// return d && days[d.getDay()];

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
	const day = dayOfWeekV[date.getDay()];

	return day;
};

export default getDayOfTheWeek;
