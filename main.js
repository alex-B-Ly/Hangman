var Word = require('./word.js');

// cat test
var cat = new Word('cat');
cat.getLets();
cat.checkIfLetterFound('c');
cat.didWeFindTheWord();