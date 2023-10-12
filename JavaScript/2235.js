var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a,b,c] = lines.shift().trim().split(" ").map(Number);

if ((a + c) === b || (a + b) === c || (b + c) === a || a === b || b === c || a === c){
    console.log("S");
}
else {
    console.log("N");
}
