// Word Counting

var fs = require('fs');
var filename = process.argv[2];
var output = {};

function countWordsInString(string) {
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
