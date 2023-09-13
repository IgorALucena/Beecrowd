/*
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [codigo, quantidade] = lines.shift().split(" ");
var total = null;
quantidade = parseInt(quantidade);


switch(codigo){
    case '1':
        total = 4.00 * quantidade;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case '2':
        total = 4.50 * quantidade;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case '3':
        total = 5.00 * quantidade;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case '4':
        total = 2.00 * quantidade;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    case '5':
        total = 1.50 * quantidade;
        console.log(`Total: R$ ${total.toFixed(2)}`);
        break;
    default:
        console.log("Insira um número de 1 a 5");
}
