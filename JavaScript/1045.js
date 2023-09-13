/*
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [n1, n2, n3] = lines.shift().split(" ");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);

var valores = [n1, n2, n3];

valores.sort(function(a, b){
    return b-a

});

var A = parseFloat(valores[0]);
var B = parseFloat(valores[1]);
var C = parseFloat(valores[2]);

var elevado = A * A

if(A >= (B+C)){
    console.log("NAO FORMA TRIANGULO");
}
else{ 
    if( (A * A) == ((B * B) + (C * C)) ){
    console.log("TRIANGULO RETANGULO");
    }
    else if( (A * A) > ((B * B) + (C * C)) ){
    console.log("TRIANGULO OBTUSANGULO");
    }
    else {
        console.log("TRIANGULO ACUTANGULO");
    }
}
if(A == B && A == C && B == C){
    console.log("TRIANGULO EQUILATERO");
}
else if(A == B || A == C || B == C){
    console.log("TRIANGULO ISOSCELES");
}