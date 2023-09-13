var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
let menor = 0;
let indice = 0;
var algozes = lines.shift().split(" ").map(Number);

menor = Math.min(...algozes);
indice = algozes.indexOf(menor);


console.log(indice+1)
