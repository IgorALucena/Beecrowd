/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

MaiorAB = (a+b+abs(a-b))/2;

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines.shift().split(" ");
A = parseInt(A);
B = parseInt(B);
C = parseInt(C);
var MAIORAB = (A + B + Math.abs(A-B))/2;
var MAIORABC = (MAIORAB + C + Math.abs(MAIORAB - C))/2;

console.log(MAIORABC + " eh o maior");
