(function() {

	'use strict';

	var json = {
		'name': 'William Shakespeare',
		'birthYear': 1564,
		'dead': true,
		'deathYear': 1616,
		'selectedWorks': [
			{
				'name': 'The Tragedy of Macbeth',
				'written': 1606,
				'isItAwesome': true
			},
			{
				'name': 'Coriolanus',
				'written': 1608,
				'isItAwesome': 'Its alright, but kinda fascist-y'
			}
		],
		'wife': {
			'name': 'Anne Hathaway',
			'birthYear': 1555,
			'dead': false,
			'deathYear': 'Fun fact, shes a vampire'
		},
		'favoriteWebsites': [
			'dailysonneter',
			'dailyprogrammer',
			'vine (hes way into 6-second cat videos)'
		],
		'facebookProfile': null
	};

	var input = 'Anne Hathaway';
	var output;

	hunt(json, '');

	function hunt(data, path) {
		for (var prop in data) {
			if ((typeof(data[prop]) === 'object') || (typeof(data[prop]) === 'array')) {
				if (hunt(data[prop], path + prop + ' -> ')) {
					return true;
				}
			} else if (data[prop] === 'Anne Hathaway') {
				console.log(path + prop);
				return true;
			}
		}
	};

})();
