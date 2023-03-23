var input = require('fs').readFileSync('/Users/joao.serpa/Documents/Beecrowd/Strings/Dancing Sentence/sampleInput.txt', 'utf8');
var lines = input.split('\r\n');


function toCase() {

    var dancingSentence = '';

    newLines = [];

    for (i = 0; i <= lines.length; i++) {

        var wordsLength = lines[i].length;

        var wordsLetters = lines[i].split('');

        //const type = typeof wordsLetters;

        //return wordsLetters;

        //newWordsLetters = [];

        for (i = 0; i <= wordsLetters.length; i++) {

            if (i % 2 == 0 && wordsLength[i] !== ' ') {

                var upperCase = wordsLetters[i]//.toUpperCase();
                console.log(upperCase);
                //dancingSentence += upperCase;
                //newWordsLetters.push(upperCase);
                //const type = typeof upperCase;
                //return dancingSentence;

            } else if (i % 2 !== 0) {

                var mantainCase = wordsLetters[i];
                console.log(mantainCase);
                //dancingSentence += mantainCase;
                //newWordsLetters.push(mantainCase);

            }

            //return newWordsLetters;

        }

    }

    //return dancingSentence;

}

console.log(toCase());