/*
Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

Entrada
O arquivo de entrada contém um número com ponto flutuante qualquer.

Saída
A saída deve ser uma mensagem conforme exemplo abaixo.
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseFloat(lines.shift());

if(n >= 0 && n<=25){
    console.log("Intervalo [0,25]");
}
else if(n>25 && n<=50){
    console.log("Intervalo (25,50]");
}
else if(n>50 && n<=75){
    console.log("Intervalo (50,75]");
}
else if(n>75 && n<=100){
    console.log("Intervalo (75,100]");
}
else{
    console.log("Fora de intervalo");
}