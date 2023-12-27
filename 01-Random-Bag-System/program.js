// https://www.reddit.com/r/dailyprogrammer/comments/3ofsyb/20151012_challenge_236_easy_random_bag_system/

var pieces = ['O', 'I', 'S', 'Z', 'L', 'J', 'T'];

function getRandomNumberWithMax(max) {
	return Math.floor(Math.random() * max);
}

function getTetrominoPieces(numberOfPieces) {

	var output = '';

	while (output.length < numberOfPieces) {

		var newPieces = pieces.slice();
		var i = 7;

		while (i >= 1) {
			if (output.length === numberOfPieces) {
				break;
			}
			var randomNumber = getRandomNumberWithMax(newPieces.length);
			var piece = newPieces[randomNumber];
			newPieces.splice(randomNumber, 1);
			output = output + piece;
			i--;
		}

	}

	return output;

}

console.log(getTetrominoPieces(50));
