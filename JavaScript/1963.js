var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let[a,b] = lines.shift().split(" ").map(Number);

let maior = Math.max(a,b);
let menor = Math.min(a,b);

let resultado = ((maior - menor)/a)*100;

console.log(resultado.toFixed(2) + "%");