var input = require('fs').readFileSync('ShortStoryCompetitionStdin.txt', 'utf8');
var lines = input.split('\r\n');

//var text1parameters = lines[0].split(' ');
var textsArray = [[lines[1] + ' ' + lines[2] + ' ' + lines[3]],
                [lines[5] + ' ' + lines[6] + ' ' + lines[7]],
                [lines[9]], [lines[11]]
]; 
console.log(textsArray.length);

var parametersArray = [
    [lines[0].split(' ')], [lines[4].split(' ')], 
    [lines[8].split(' ')], [lines[10].split(' ')]
];
//array tridimensional dos parametros;

/*for (i = 0; i < parametersArray.length; i++) {
    var textParameter = parametersArray[i][0][2];
    console.log(textParameter);
}*/

arrayAllWords = [];

for (i = 0; i < textsArray.length; i++) {
    var arrayWordsOfText = textsArray[i][0].split(' ');
    console.log(arrayWordsOfText);
}
/*var str1 = '';
var Num = 0;
for(i = 0; i < arrayText1.length; i++) {
    var NumLetters = arrayText1[i].length;
    var Num = Num + NumLetters;
    if (Num <= text1parameters[2]) {
        var str1 = str1 + (arrayText1[i] + ' ');
    } else {

    }

} console.log(str1);*/

var initializeCounting = {
    num: 0,
};

/*for(i = 0; i < arrayText1.length; i++) {
    var numLetters = arrayText1[i].length;
    initializeCounting.num = initializeCounting.num + numLetters;
    if (initializeCounting.num <= text1parameters[2]) {
        initializeCounting.str1 = initializeCounting.str1 + (arrayText1[i] + ' ');
    } else {
        initializeCounting.str1 = arrayText1[i] + ' ';
        initializeCounting.num = arrayText1[i].length + 0;
        
    } console.log(initializeCounting.str1);
}*/

function closest() {
    arraySum = [];
    for (i = 1; i < textsArray.length; i++) {
        var sum = 0;
        var arrayWordsOfText = textsArray[i][0].split(' ');
        console.log(arrayWordsOfText);
        
        for(i = 0; i < arrayWordsOfText.length; i++) {
            var numLetters = arrayWordsOfText[i].length;
            console.log(numLetters);
            initializeCounting.num = initializeCounting.num + numLetters;

            for (i = 0; i < parametersArray.length; i++) {
                var textParameter = parametersArray[i][0][2];

                while ((textParameter - initializeCounting.num) <= 0) {
                    sum = sum + 1;
                    initializeCounting.num = arrayWordsOfText[i].length + 0;
                    console.log(sum);
                    if(sum > 20) {
                        break;
                    }

                    if (arrayWordsOfText[i] === arrayWordsOfText[arrayWordsOfText.length - 1]) {
                        sum = sum + 1;
                        console.log(sum);
                        if(sum > 20) {
                            break;
                        }
                    }
                }
            }
        } 
        arraySum.push(sum);
    } 
    return arraySum;
} 
console.log(closest());
/*function text1() {
    text1String = '';
    for(i = 1; i < 4; i++) {
        var text1String = text1String + lines[i];
    } return text1String;
} console.log(text1());*/