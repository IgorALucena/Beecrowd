/*
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
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
var soma = 0.0;
for(let valor of valores){
    if(valor > 0){
        qtdValores++; 
        soma += parseFloat(valor);
    }
}

console.log(qtdValores + " valores positivos");
console.log ((soma/qtdValores).toFixed(1));
