/*
Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var escolha = parseInt(lines.shift());

var meses = [{valor: 1, extenso: "January"},
{valor: 2, extenso: "February"},
{valor: 3, extenso: "March"},
{valor: 4, extenso: "April"},
{valor: 5, extenso: "May"},
{valor: 6, extenso: "June"},
{valor: 7, extenso: "July"},
{valor: 8, extenso: "August"},
{valor: 9, extenso: "September"},
{valor: 10, extenso: "October"},
{valor: 11, extenso: "November"},
{valor: 12, extenso: "December"}]

for(let m of meses){
    if(escolha == m.valor){
        console.log(m.extenso);
    break;
    }
}
