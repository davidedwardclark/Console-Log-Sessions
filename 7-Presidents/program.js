// https://www.reddit.com/r/dailyprogrammer/comments/49aatn/20160307_challenge_257_easy_in_what_year_were/

var data = [
	{'born': 1732, 'died': 1799},
	{'born': 1735, 'died': 1826},
	{'born': 1743, 'died': 1826},
	{'born': 1751, 'died': 1836},
	{'born': 1758, 'died': 1831},
	{'born': 1767, 'died': 1848},
	{'born': 1767, 'died': 1845},
	{'born': 1782, 'died': 1862},
	{'born': 1773, 'died': 1841},
	{'born': 1790, 'died': 1862},
	{'born': 1795, 'died': 1849},
	{'born': 1784, 'died': 1850},
	{'born': 1800, 'died': 1874},
	{'born': 1804, 'died': 1869},
	{'born': 1791, 'died': 1868},
	{'born': 1809, 'died': 1865},
	{'born': 1808, 'died': 1875},
	{'born': 1822, 'died': 1885},
	{'born': 1822, 'died': 1893},
	{'born': 1831, 'died': 1881},
	{'born': 1829, 'died': 1886},
	{'born': 1837, 'died': 1908},
	{'born': 1833, 'died': 1901},
	{'born': 1843, 'died': 1901},
	{'born': 1858, 'died': 1919},
	{'born': 1857, 'died': 1930},
	{'born': 1856, 'died': 1924},
	{'born': 1865, 'died': 1923},
	{'born': 1872, 'died': 1933},
	{'born': 1874, 'died': 1964},
	{'born': 1882, 'died': 1945},
	{'born': 1884, 'died': 1972},
	{'born': 1890, 'died': 1969},
	{'born': 1917, 'died': 1963},
	{'born': 1908, 'died': 1973},
	{'born': 1913, 'died': 1994},
	{'born': 1913, 'died': 2006},
	{'born': 1924, 'died': undefined},
	{'born': 1911, 'died': 2004},
	{'born': 1924, 'died': undefined},
	{'born': 1946, 'died': undefined},
	{'born': 1946, 'died': undefined},
	{'born': 1961, 'died': undefined},
];

var currentYear = new Date().getFullYear();
var yearsArray = [];
var yearsFrequency = [];

data.forEach(function (item, index, array) {
	if (item.died === undefined) {
		item.died = currentYear;
	}
	for (var i = item.born; i <= item.died; i++) {
		yearsArray.push(i);
	}
});

yearsArray.sort(function (a, b) {
	return a - b;
});

var yearsCount = yearsArray.reduce(function (previous, current) {
	if (typeof previous[current] === "undefined") {
		previous[current] = 1;
	} else {
		previous[current] = previous[current] + 1;
	}
	yearsFrequency.push(previous[current]);
	return previous;
}, {});

var biggestNumber = yearsFrequency.reduce(function (previous, current) {
	if (previous > current) {
		return previous;
	} else {
		return current;
	}
});

for (var prop in yearsCount) {
	if (yearsCount[prop] === biggestNumber) {
		console.log(prop);
	}
}
