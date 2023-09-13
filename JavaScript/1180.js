var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = lines.shift();
let x = lines.shift().split(" ").map(Number);

let menor = Math.min(...x);

let indice = x.indexOf(menor);

console.log("Menor valor: " + menor);

console.log("Posicao: " + indice);
