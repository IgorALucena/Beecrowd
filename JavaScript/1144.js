var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines.shift());
var nI = 1;
for(var i = 0; i<n*2; i++){
    
    console.log(nI + " " + ((Math.pow(nI,2)) + (i%2)) + " " + ((Math.pow(nI, 3)) + (i%2)));
    nI += (i%2);
}
