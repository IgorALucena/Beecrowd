var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a,b] = lines.shift().split(" ").map(Number);

console.log(a*b);
