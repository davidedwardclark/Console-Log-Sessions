var fetchUrl = require("fetch").fetchUrl;
var url = 'http://tinyurl.com/hjwus8t';
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var formattedDates = [];

fetchUrl(url, function (error, meta, body) {

	var dates = body.toString().split('\n');

	for (var i = 0; i < dates.length; i++) {

		var date = dates[i];

		if (date.indexOf('-') > -1) {
			formattedDates.push(date);
		} else {
			var correctDate = fixDate(date);
			formattedDates.push(correctDate);
		}

	}

	console.log('---');
	console.log(formattedDates);

});

function fixDate(date) {

	var dateArray;
	var year;
	var month;
	var day;

	if (date.indexOf('/') > -1) {
		dateArray = date.split('/');
		month = dateArray[0];
		day = dateArray[1];
		year = fixYear(dateArray[2]);
	} else if (date.indexOf('#') > -1) {
		dateArray = date.split('#');
		month = dateArray[0];
		year = fixYear(dateArray[1]);
		day = dateArray[2];
	} else if (date.indexOf('*') > -1) {
		dateArray = date.split('*');
		day = dateArray[0];
		month = dateArray[1];
		year = dateArray[2];
	} else if (date.indexOf(' ') > -1) {
		dateArray = date.split(' ');
		month = dateArray[0];
		for (var i = 0; i <= months.length; i++) {
			if (months[i] === month && i < 9) {
				month = '0' + (i + 1);
			} else if (months[i] === month && i >= 9) {
				month = i + 1;
			}
		}
		day = dateArray[1].slice(0, -1);
		year = dateArray[2];
		if (year.length === 2) {
			year = fixYear(year);
		}
	}

	return year + '-' + month + '-' + day;

}

function fixYear(year) {
	if (year >= 50) {
		year = '19' + year;
	} else {
		year = '20' + year;
	}
	return year;
}
