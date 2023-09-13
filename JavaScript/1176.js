var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let resultado = [];
var a = 0;
var b = 1;
var c = 0;
var t = Number(lines.shift());
for(let i = 0; i<61; i++){
    resultado[i] = c;
    a = b;
    b = c;
    c = a+b;
    
}
for(let j = 0; j<t; j++){
    let n = Number(lines.shift());
    console.log("Fib("+n+") = " + resultado[n]);         
}
