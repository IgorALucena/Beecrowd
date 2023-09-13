var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var lines = input.split('\n');
var n = Number(lines.shift());
var a = 0;
var b = 1;
var c = 0;
var resultado = [];

for(let i = 0; i<n; i++){
  c = a + b;
  resultado[i] = a;
  a=b
  b=c;

}

console.log(resultado.join(" "));