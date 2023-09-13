var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let v = Number(lines.shift());

console.log(v.toString(16).toUpperCase());
