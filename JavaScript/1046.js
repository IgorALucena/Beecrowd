/*
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [inicio, final] = lines.shift().split(" ");

inicio = parseInt(inicio);
final = parseInt(final);

if(inicio - final < 1 && inicio - final > 0){
    console.log("O JOGO PRECISA TER A DURACAO MINIMA DE 1 HORA");
}

else if(inicio == final){
    console.log("O JOGO DUROU 24 HORA(S)");

}
else if(inicio < final){
    let qtdHoras = Math.abs(inicio - final);
    console.log("O JOGO DUROU " + qtdHoras + " HORA(S)");
}
else if(inicio > final){
    let qtdHoras = 24 - (inicio - final);
    console.log("O JOGO DUROU " + qtdHoras + " HORA(S)");
}

