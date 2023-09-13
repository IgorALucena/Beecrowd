/*
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor1 = parseInt(lines.shift());
var valor2 = parseInt(lines.shift());
var valor3 = parseInt(lines.shift());
var valor4 = parseInt(lines.shift());
var valor5 = parseInt(lines.shift());


var valores = [valor1, valor2, valor3, valor4, valor5]
var contPar = 0;
var contImpar = 0;
var contPositivo = 0;
var contNegativo = 0;

for(let valor of valores){
    if(valor % 2 == 0){
        contPar++; 
    }
    else{
        contImpar++
    }
    if(valor>0){
        contPositivo++
    }
    else{
        if(valor<0){
            contNegativo++
        }
    }
}

console.log(contPar + " valor(es) par(es)");
console.log(contImpar + " valor(es) impar(es)");
console.log(contPositivo + " valor(es) positivo(s)");
console.log(contNegativo + " valor(es) negativo(s)");
