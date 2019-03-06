// https://www.reddit.com/r/dailyprogrammer/comments/5yaiin/20170308_challenge_305_intermediate_the_best/?st=j0e9v37g&sh=dbcf6259

var fetchUrl = require('fetch').fetchUrl;
var readline = require('readline-sync');
var url = 'http://www-personal.umich.edu/~jlawler/wordlist';
var minSize = 3;
var matchArray = [];
var uniqueArray = [];
var masterArray = [];

fetchUrl(url, function (error, meta, body) {

    var words = body.toString().split('\n');
    for (var h = 0; h < words.length; h++) {
        var input = words[h];
        input = input.replace(/(\r\n|\n|\r)/gm,"");
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
        matchArray = [];
        if (uniqueArray.length > 0) {
            masterArray.push(uniqueArray);
        }
        uniqueArray = [];
    }

    masterArray.sort(function (a, b) {
        return a.length - b.length;
    });

    // Solution
    console.log(masterArray[masterArray.length - 1]);

});
