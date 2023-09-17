var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = input.trim();
n = n.split("");
let invertido = n.reverse();

console.log(invertido.join(""));