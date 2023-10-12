var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [h, p] = lines.shift().trim().split(" ").map(Number);

console.log((h/p).toFixed(2));
