var input = require('fs').readFileSync('ContractRevisionStdin.txt', 'utf8');
var lines = input.split('\n');

for (contract of lines) {
    var separateContract = contract.split(' ');
    var failedDigit = separateContract[0];
    for (i = 0; i < separateContract[1].length; i++) {
        if (i == failedDigit) {
            var removeFromString = separateContract[1].replaceAll(i, '');
            var outputNumber = parseInt(removeFromString);
            if (isNaN(outputNumber)) {
                console.log(0);
            } else {
                console.log(outputNumber);
            }
        }
    }
}


