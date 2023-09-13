/*
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var valorMonetario = parseFloat(lines.shift());

var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:");

for(let nota of notas){
        var qtdNotas = parseInt(valorMonetario/nota);
        console.log(qtdNotas + " nota(s) de R$ " + nota.toFixed(2));
        valorMonetario= valorMonetario%nota;
}

console.log("MOEDAS:");

for(let moeda of moedas){
    var qtdMoedas = parseInt(valorMonetario/moeda);
    console.log(qtdMoedas + " moeda(s) de R$ " + moeda.toFixed(2));
    valorMonetario= valorMonetario%moeda+0.00001;
}
