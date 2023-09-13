/*
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a,b,c] = lines.shift().split(" ");

var numeros = [a, b, c];
var numerosLidos = [a, b, c];

numeros.sort(function(a, b){
    return a - b;
});

for(let i = 0; i<numeros.length; i++){
    console.log(numeros[i]);
}
console.log("") ;  

for(let i = 0; i<numeros.length; i++){
    console.log(numerosLidos[i]);
}
