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
    this.keepPromptingUser();
    // TODO Remove console log below when done testing.
    console.log(currentWrd);
  },

  keepPromptingUser: function(){
    var self = this;

    prompt.get(['guessLetter'], function(err, result){
      console.log('The letter or space you guessed is ' + result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

      if(findHowManyOfUserGuess === 0){
        console.log('You guessed wrong.');
        guessesRemaining--;
      }else{
        console.log('You guessed right.');
        // Check if game has been won
        if(self.currentWrd.didWeFindTheWord() === true){
          console.log('You won!');
          return 1;
        }else{
          console.log('Guesses remaining: '+self.guessesRemaining);
          console.log(self.currentWrd.wordRender());
        }
      }
    });
  }

}

game.startGame();

// cat test
// var cat = new Word('cat');
// cat.getLets();
// cat.checkIfLetterFound('a');
// cat.wordRender();