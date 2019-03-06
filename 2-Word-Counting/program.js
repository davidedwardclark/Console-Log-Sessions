// https://www.reddit.com/r/dailyprogrammer/comments/2nynip/2014121_challenge_191_easy_word_counting/

var fs = require('fs');
var filename = process.argv[2];

function countWordsInString(string) {
	var output = {};
	var arrayOfWords = string.toLowerCase().replace(/[=-_"',;:.\]\[?!+$%()]/g," ").replace(/\s\s+/g," ").split(" ");
	arrayOfWords.forEach(function(element, index, array) {
		if (output[element]) {
			output[element] = output[element] + 1;
		} else {
			output[element] = 1;
		}
	});
	return output;
}

fs.readFile(filename, 'utf8', function(error, data) {
	console.log(countWordsInString(data));
});
