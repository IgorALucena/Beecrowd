/*
Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor1 = parseFloat(lines.shift());
var valor2 = parseFloat(lines.shift());
var valor3 = parseFloat(lines.shift());
var valor4 = parseFloat(lines.shift());
var valor5 = parseFloat(lines.shift());
var valor6 = parseFloat(lines.shift());

var valores = [valor1, valor2, valor3, valor4, valor5, valor6]
var qtdValores = 0;
for(let valor of valores){
    if(valor > 0){
        qtdValores++; 
    }
}
console.log(qtdValores + " valores positivos");