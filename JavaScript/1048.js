/*
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


Salário	
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

Percentual de Reajuste
15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());

if(salario >= 0.0 && salario <= 400.00){
    let reajuste = 0.15;
    let montante = salario * reajuste;
    let salarioReajustado = salario + montante;
    let porcentagem = reajuste * 100;
    console.log("Novo salario: " + salarioReajustado.toFixed(2));
    console.log("Reajuste ganho: " + montante.toFixed(2));
    console.log("Em percentual: " + porcentagem.toFixed(0) + " %");
}
else if(salario > 400.00 && salario <= 800.00){
    let reajuste = 0.12;
    let montante = salario * reajuste;
    let salarioReajustado = salario + montante;
    let porcentagem = reajuste * 100;
    console.log("Novo salario: " + salarioReajustado.toFixed(2));
    console.log("Reajuste ganho: " + montante.toFixed(2));
    console.log("Em percentual: " + porcentagem.toFixed(0) + " %");
}
else if(salario > 800.00 && salario <= 1200.00){
    let reajuste = 0.10;
    let montante = salario * reajuste;
    let salarioReajustado = salario + montante;
    let porcentagem = reajuste * 100;
    console.log("Novo salario: " + salarioReajustado.toFixed(2));
    console.log("Reajuste ganho: " + montante.toFixed(2));
    console.log("Em percentual: " + porcentagem.toFixed(0) + " %");
}
else if(salario > 1200.00 && salario <= 2000.00){
    let reajuste = 0.07;
    let montante = salario * reajuste;
    let salarioReajustado = salario + montante;
    let porcentagem = reajuste * 100;
    console.log("Novo salario: " + salarioReajustado.toFixed(2));
    console.log("Reajuste ganho: " + montante.toFixed(2));
    console.log("Em percentual: " + porcentagem.toFixed(0) + " %");
}
else{
    let reajuste = 0.04;
    let montante = salario * reajuste;
    let salarioReajustado = salario + montante;
    let porcentagem = reajuste * 100;
    console.log("Novo salario: " + salarioReajustado.toFixed(2));
    console.log("Reajuste ganho: " + montante.toFixed(2));
    console.log("Em percentual: " + porcentagem.toFixed(0) + " %");
}
