/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [x1,y1] = lines.shift().split(" ");
var [x2,y2] = lines.shift().split(" ");

var x1 = parseFloat(x1);
var x2 = parseFloat(x2);
var y1 = parseFloat(y1);
var y2 = parseFloat(y2);

var distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

console.log(distancia.toFixed(4));