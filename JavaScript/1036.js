/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
*/

var lines = input.split('\n');

var [A, B, C] = lines.shift().split(" ");
var delta = (B * B) - ((4 * A) * C);
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);
delta = delta;

var R1 = (-B + (Math.sqrt(delta))) / (2 * A);
var R2 = (-B - (Math.sqrt(delta)))/ (2 * A);

if(delta < 0 || A == 0){
    console.log("Impossivel calcular");
}
else{
    
    console.log("R1 = " + R1.toFixed(5));
    console.log("R2 = " + R2.toFixed(5));
}
