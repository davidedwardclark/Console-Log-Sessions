// https://www.reddit.com/r/dailyprogrammer/comments/6eerfk/20170531_challenge_317_intermediate_counting/

let input1 = 'C6H12O6Na2';
let input2 = 'CCl2F2';
let input3 = 'NaHCO3';
let input4 = 'C4H8(OH)2';
let input5 = 'PbCl(NH3)2(COOH)2';

console.log('Input: ', input5);

/*
Break on left brackets: PbCl(NH3)2 = PbCl NH3)2
Break on capital letters: CGyH = C Gy H
Break on numbers: C6E2 = C6 E2
*/

let output = {};

let splitLeftBracketsOut = input5.split('(');

splitLeftBracketsOut.forEach(function(element) {
  if (element.includes(')')) {
    let splitRightBracketsOut = element.split(')');
    let elements = splitRightBracketsOut[0];
    var timesBy = splitRightBracketsOut[1];
    splitCapitalLettersOut(elements, timesBy)
  } else {
    splitCapitalLettersOut(element);
  }
});

function splitCapitalLettersOut(element, timesBy) {
  let splitCapitalLettersOut = element.split(/(?=[A-Z])/);
  splitCapitalLettersOut.forEach(function(element) {
    let twoParts = element.split(/(?=[1-9])/);
    let first = twoParts.shift();
    let second = parseInt(twoParts.join('')) || 1;
    output[first] = (output[first] || 0) + (second * (timesBy || 1));
  });
}

console.log('Output: ', output);
