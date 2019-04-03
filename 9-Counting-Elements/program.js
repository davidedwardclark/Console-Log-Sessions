// https://www.reddit.com/r/dailyprogrammer/comments/6eerfk/20170531_challenge_317_intermediate_counting/

var input1 = 'C6H12O6Na2';
var input2 = 'CCl2F2';
var input3 = 'NaHCO3';

var input4 = 'C4H8(OH)2';
var input5 = 'PbCl(NH3)2(COOH)2';
console.log('Input: ', input1);


/*
When to Break
Break on capital letter: CGyH = C Gy H
Break on number: C6E2 = C6 E2
*/

var splitCapitalLettersOut = input1.split(/(?=[A-Z])/);
console.log(splitCapitalLettersOut);

var output = {};

splitCapitalLettersOut.forEach(function(element) {
  var twoParts = element.split(/(?=[1-9])/);
  var first = twoParts.shift();
  var second = parseInt(twoParts.join(''));
  output[first] = second;
});

console.log(output);


// arrayOfCharacters.forEach(function(character) {
//   if (!isNaN(character * 1)) {
//     console.log('isNumber');
//   } else {
//     if (character == character.toUpperCase()) {
//       console.log('isUpperCaseLetter');
//     }
//     if (character == character.toLowerCase()){
//       console.log('isLowerCaseLetter');
//     }
//   }
// });

// var isUpperCaseLetter;
// var isLowerCaseLetter;
// var isNumber;



var output = {
  C: 6,
  H: 12,
  O: 6,
}
//console.log('Output: ', output);
