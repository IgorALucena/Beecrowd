/*
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor1 = parseInt(lines.shift());
var valor2 = parseInt(lines.shift());
var valor3 = parseInt(lines.shift());
var valor4 = parseInt(lines.shift());
var valor5 = parseInt(lines.shift());

var valores = [valor1, valor2, valor3, valor4, valor5]
var qtdValores = 0;

for(let valor of valores){
    if(valor % 2 == 0){
        qtdValores++; 
    }
}

console.log(qtdValores + " valores pares");
