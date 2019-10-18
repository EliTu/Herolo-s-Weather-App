const getDayOfTheWeek = (epochDate: number, i: number) => {
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

export default getDayOfTheWeek;
