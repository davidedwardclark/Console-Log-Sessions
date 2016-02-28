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

	settingsOption.addEventListener('click', function(e) {
		var level = e.target.innerHTML.toLowerCase();
		changeScreen('game');
		gameSetup(level);
	}, false);

	function gameSetup(level) {
		console.log('Difficulty level: ', level);
	}

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

})();
