var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
const frase = "LIFE IS NOT A PROBLEM TO BE SOLVED"

console.log(frase.slice(0,n));