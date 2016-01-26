var Letter = require('./Letter.js');

// Word Constructor Function
module.exports = function(wrd){
  var self = this;
  this.word = wrd,
  this.lets = [],
  this.found = false,

  this.getLets = function(){
    for(var i=0; i<self.word.length; i++){
      // Creates new Letter object and pushes into lets array.
      var newLetter = new Letter(self.word[i]);
      this.lets.push(newLetter);
    }
  }

  // Iterate over lets array and check if guess is equal to charac property
  this.checkIfLetterFound = function(guessLetter){
    var whatToReturn = 0;

    self.lets.forEach(function(letter){
      if(letter.charac === guessLetter){
        letter.appear = true;
        whatToReturn++;
      }
    });
    return whatToReturn;
  }

  // Check each object in lets array to see if every one of their appear property is set to true
  this.didWeFindTheWord = function(){
    self.lets.every(function(curLet){
      if(curLet.appear === true){
        self.found = true;
        return self.found;
      }
    });
  }

  this.wordRender = function(){
    var str = '';

    self.lets.forEach(function(letter){
      var currentLetter = letter.letterRender();
      str += currentLetter;
    });

    return str;
  }

}
