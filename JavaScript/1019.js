/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var segundos = parseInt(lines.shift());

var horas = parseInt(segundos/3600);
segundos = segundos%3600;

var minutos = parseInt(segundos/60);
segundos = segundos%60;

console.log(horas + ":" + minutos + ":" + segundos);

