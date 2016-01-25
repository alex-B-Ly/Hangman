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

  // startGame method: Gets random string from wordbank array and creates new word object
  startGame: function(wrd){
    currentWrd = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
    currentWrd.getLets();
    keepPromptingUser();
    // TODO Remove console log below when done testing.
    console.log(currentWrd);
  }

  keepPromptingUser: function(){
    var self = this;

    // Finish prompt call below
    prompt.get();
  }

}

game.startGame();

// cat test
// var cat = new Word('cat');
// cat.getLets();
// cat.checkIfLetterFound('a');
// cat.wordRender();