var input = require('fs').readFileSync('LEDsstdin.txt', 'utf8');
var lines = input.split('\r\n');

var arrayLEDsNumber = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
//O numero de LEDs na matriz coincide com o numero da posicao na matriz;

var numberOfIterations = lines.shift();

for (let value of lines) {
    var outputTotalLED = 0;
    for (let i = 0; i < value.length; i++) {
        var LEDnumber = arrayLEDsNumber[value[i]];
        outputTotalLED += LEDnumber;
    } 
    console.log(outputTotalLED + ' leds');
}
