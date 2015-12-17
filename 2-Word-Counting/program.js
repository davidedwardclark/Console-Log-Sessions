// Word Counting
// Fix: make all words lowercase. remove all punctuation, multi spaces and multi breaks.

var fs = require('fs');
var filename = process.argv[2];

function countWordsInString(string) {
	var output = {};
	var arrayOfWords = string.split(" ");
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
