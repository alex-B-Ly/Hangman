// file REQ
var prompt = require('prompt');
var Word = require('./Word.js');

// Start Prompt
prompt.start();

// Game object
var game = {
  wordBank: ['anaphylaxis', 'mitochondrion', 'opossum'],
  guessesRemaining: 10,
  currentWrd: null,

  startGame: function(wrd){
    currentWrd = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
    currentWrd.getLets();
    // TODO Remove console log below when done testing.
    console.log(currentWrd);
  }
}

game.startGame();

// cat test
// var cat = new Word('cat');
// cat.getLets();
// cat.checkIfLetterFound('a');
// cat.wordRender();