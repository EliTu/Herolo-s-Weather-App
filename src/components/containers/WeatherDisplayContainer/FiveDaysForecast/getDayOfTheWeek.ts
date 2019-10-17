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
    
	var date = new Date(epochDate * 1000);
	var dayOfWeekV = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	var day = dayOfWeekV[date.getDay()];

	return day;
};

export default getDayOfTheWeek;
