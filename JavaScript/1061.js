/*
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var diaInicio = parseInt(lines.shift().slice(4));
var [horaI, minutoI, segundoI] = lines.shift().split(" : ").map(item => parseInt(item))
var diaFim = parseInt(lines.shift().slice(4));
var [horaF, minutoF, segundoF] = lines.shift().split(" : ").map(item => parseInt(item))

var tempoSegI = segundoI + minutoI * 60 + horaI * 3600 + diaInicio * 86400;
var tempoSegF = segundoF + minutoF * 60 + horaF * 3600 + diaFim * 86400;
var tempo = tempoSegF - tempoSegI;

console.log(parseInt(tempo/86400) + " dia(s)");
tempo %= 86400
console.log(parseInt(tempo/3600) + " hora(s)");
tempo %= 3600
console.log(parseInt(tempo/60) + " minuto(s)");
tempo %= 60
console.log(parseInt(tempo) + " segundo(s)");
