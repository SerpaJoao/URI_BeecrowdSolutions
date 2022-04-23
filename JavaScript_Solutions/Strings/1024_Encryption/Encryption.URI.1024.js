var input = require('fs').readFileSync('EncryptionStdin.txt', 'utf8');
var lines = input.split('\r\n');

var lines_To_encrypt = lines.shift();
var text_one = lines.shift();
var text_two = lines.shift();
var text_three = lines.shift();
var text_four = lines.shift();

const texts = [];
texts[0] = text_one;
texts[1] = text_two;
texts[2] = text_three;
texts[3] = text_four;

for(textStr of texts) {
    var str = '';
    for (var i = 0; i < textStr.length; i++) { 
        var ascii_code = textStr[i].charCodeAt();
        if ((ascii_code >= 65 && ascii_code <= 90) || (ascii_code >= 97 && ascii_code <= 122)) {
            var charShift = ascii_code + 3;
            var new_ascii_code = String.fromCharCode(charShift);
            str += new_ascii_code;
        } else {
            str += textStr[i];
        } 
    } function shiftHalfOn() {
        var reverseDString = str.split('').reverse().join('');
        var halfon = Math.trunc(reverseDString.length / 2);
        var newShiftedString = '';
        for (var i = 0; i < reverseDString.length; i++) {
            var ascii_code_again = reverseDString[i].charCodeAt();
            if(i < halfon) {
                newShiftedString += reverseDString[i];
            } else {
                var charShift_again = ascii_code_again - 1;
                var new_ascii_code_again = String.fromCharCode(charShift_again);
                newShiftedString += new_ascii_code_again;
            }
        } return newShiftedString;
    } console.log(shiftHalfOn());
}
