/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [id1, qtd1, valor1] = lines.shift().split(" ");
var [id2, qtd2, valor2] = lines.shift().split(" ");

var valor1 = qtd1 * valor1;
var valor2 = qtd2 * valor2;

var valorTotal = parseFloat(valor1) + parseFloat(valor2);

console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));