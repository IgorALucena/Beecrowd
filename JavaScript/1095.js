var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var i = 1;
var j = 60;
console.log("I=" + i + " J=" + j);
for(var x = 1; i<=34; x++){
    i += 3
    j -=5

    console.log("I=" + i + " J=" + j);
    
}