var fetchUrl = require('fetch').fetchUrl;
var readline = require('readline-sync');
var url = 'http://www-personal.umich.edu/~jlawler/wordlist';
//var input = readline.question('Please enter a word: ');
var minSize = 3;
var matchArray = [];
var uniqueArray = [];
var masterArray = [];

fetchUrl(url, function (error, meta, body) {

    var words = body.toString().split('\n');

    for (var i = 0; i < words.length; i++) {
        var input = words[i];

        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            word = word.replace(/(\r\n|\n|\r)/gm,"");
            for (j = 0; j < input.length - 1; j++) {
                for (k = j; k < input.length - 1; k++) {
                    var subString = input.substring(j, minSize + k);
                    if (word === subString && input.length !== word.length && subString.length >= minSize) {
                        matchArray.push(subString);
                    }
                }
            }
        }
        uniqueArray = matchArray.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        });
        masterArray.push(uniqueArray);

    }


    console.log(masterArray);
});
