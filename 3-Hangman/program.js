// Experiment with this tech:
// React: https://facebook.github.io/react/
// Learn ES6: https://leanpub.com/understandinges6/read/
// Compile to ES5: http://babeljs.io/
// Package Management: http://webpack.github.io/
// Linting: http://eslint.org/ & http://jscs.info/
// Implement as much as you can: https://medium.com/@ryanflorence/welcome-to-future-of-web-application-delivery-9750b7564d9f#.iz0pdlubg
// Learn: https://medium.com/javascript-scene/how-to-learn-es6-47d9a1ac2620#.jup7rss0l

// HOW THE GAME WORKS
// User selects Normal Mode or Difficult Mode.
// Computer chooses a word.
// Interface is populated with underscores for that word.
// Player guesses if a word from the alphabet is in the word.
// If it is then the underscore(s) get replaced with that word.
// If it is not then the hang man gets one piece added to it and the incorrect letter is appended to the Miss List.
// If the player gets six guesses wrong it loses.
// If the player completes the word it wins.

(function() {

	'use strict';

	var settingsOption = document.querySelector('.settings');
	var wordContainer = document.querySelector('#word');
	var missesContainer = document.querySelector('#incorrectletters');
	var directionsContainer = document.querySelector('#directions');
	var hangman = document.querySelector('#hangman-image');
	var gameStarted = false;
	var word;
	var wordArray;
	var wordLength;
	var enteredUniqueLetters = [];
	var enteredUniqueMatchingLetters = [];
	var enteredNonMatchingLetters = [];
	var guesses = 0;
	var lost = false;
	var won = false;

	settingsOption.addEventListener('click', function(e) {
		var level = e.target.innerHTML.toLowerCase();
		changeScreen('game');
		gameSetup(level);
	}, false);

	function changeScreen(screen) {
		var homescreen = document.querySelector('#homescreen');
		var gamescreen = document.querySelector('#gamescreen');
		if (screen === 'home') {
			homescreen.className = 'screen-on';
			gamescreen.className = '';
		} else if (screen === 'game') {
			homescreen.className = '';
			gamescreen.className = 'screen-on';
		}
	}

	var words = {
		easy: ["package", "guesses","letters"],
		medium: ["jocks", "quick","junky"],
		hard: ["the", "dog", "car"]
	};

	function gameSetup(level) {
		word = pickWord(level);
		console.log("the word:", word);
		wordArray = word.split('');
		wordLength = wordArray.length;
		for (var i = 0; i < wordLength; i++) {
			enteredUniqueMatchingLetters.push('&nbsp;');
		}
		updateWordContainer();
		gameStarted = true;
	}

	function pickWord(level) {
		var wordLevel = words[level];
		var word = wordLevel[Math.floor(Math.random() * wordLevel.length)];
		return word;
	}

	document.onkeypress = function(e) {
		if (gameStarted && !lost && !won) {
			e = e || window.event;
			var letter = String.fromCharCode(e.keyCode);
			if (/[a-z]/.test(letter)) {
				if (!enteredUniqueLetters.contains(letter)) {
					enteredUniqueLetters.push(letter);
					if (wordArray.contains(letter)) {
						for (var i = 0; i < wordLength; i++) {
							if (letter === word.split('')[i]) {
								directionsContainer.innerHTML = "Nice one";
								enteredUniqueMatchingLetters[i] = letter;
								updateWordContainer();
							}
						}
					} else {
						enteredNonMatchingLetters.push(letter);
						directionsContainer.innerHTML = "This letter does not match";
						updateMissContainer();
					}
				} else {
					directionsContainer.innerHTML = "This letter has already been entered";
				}
			}
		}
	};

	function updateWordContainer() {
		var htmlSnippet = '';
		for (var i = 0; i < enteredUniqueMatchingLetters.length; i++) {
			htmlSnippet += '<span>' + enteredUniqueMatchingLetters[i] + '</span>';
		}
		wordContainer.innerHTML = htmlSnippet;
		if (!enteredUniqueMatchingLetters.contains('&nbsp;')) {
			won = true;
			directionsContainer.innerHTML = "You win";
		}
	}

	function updateMissContainer() {
		guesses = guesses + 1;
		hangman.src = 'img/' + guesses + '.png';
		var htmlSnippet = '';
		for (var i = 0; i < enteredNonMatchingLetters.length; i++) {
			htmlSnippet = htmlSnippet + enteredNonMatchingLetters[i] + ', ';
		}
		missesContainer.innerHTML = htmlSnippet.replace(/,\s*$/, '');
		if (guesses === 6) {
			lost = true;
			directionsContainer.innerHTML = "You lose";
		}
	}

	Array.prototype.contains = function(needle) {
		for (var i in this) {
			if (this[i] === needle) {
				return true;
			}
		}
		return false;
	}

})();
