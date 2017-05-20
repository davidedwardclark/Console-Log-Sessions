var fetchUrl = require('fetch').fetchUrl;
var readline = require('readline-sync');
var url = 'http://www-personal.umich.edu/~jlawler/wordlist';
var input = readline.question('Please enter a word: ');
var minSize = 2;
var matchArray = [];

fetchUrl(url, function (error, meta, body) {
    var words = body.toString().split('\n');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        word = word.replace(/(\r\n|\n|\r)/gm,"");
        for (j = 0; j < input.length - 1; j++) {
            for (k = j; k < input.length - 1; k++) {
                var subString = input.substring(j, minSize + k);
                if (word === subString) {
                    console.log(subString);
                }
            }
        }
    }
});
