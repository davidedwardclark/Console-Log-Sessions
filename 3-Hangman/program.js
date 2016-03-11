(function() {

	'use strict';

	var settingsOption = document.querySelector('.settings');
	var homescreen = document.querySelector('#homescreen');
	var gamescreen = document.querySelector('#gamescreen');
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
							if (letter === wordArray[i]) {
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
			htmlSnippet = htmlSnippet + '<span>' + enteredUniqueMatchingLetters[i] + '</span>';
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
