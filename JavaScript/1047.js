/*
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines.shift().split(" ");

horaInicial = parseInt(horaInicial);
minutoInicial = parseInt(minutoInicial);
horaFinal = parseInt(horaFinal);
minutoFinal = parseInt(minutoFinal);

var horasEmMinutosInicial = (horaInicial * 60) + minutoInicial;
var horasEmMinutosFinal = (horaFinal * 60) + minutoFinal;

if((horasEmMinutosInicial - horasEmMinutosFinal) < 1 && (horasEmMinutosInicial - horasEmMinutosFinal) > 0){
    console.log("O JOGO PRECISA TER A DURACAO MINIMA DE 1 minuto");
}
else if(horasEmMinutosInicial == horasEmMinutosFinal){
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}
else if(horasEmMinutosInicial < horasEmMinutosFinal){
    let qtdMinutos = Math.abs(horasEmMinutosInicial - horasEmMinutosFinal);
    let hora = parseInt(qtdMinutos / 60);
    let minuto = qtdMinutos%60;
    console.log("O JOGO DUROU " + hora + " HORA(S) E " + minuto + " MINUTO(S)");
}
else if(horasEmMinutosInicial > horasEmMinutosFinal){
    let qtdMinutos = (24 * 60) - (horasEmMinutosInicial - horasEmMinutosFinal);
    let hora = parseInt(qtdMinutos / 60);
    let minuto = qtdMinutos%60;
    console.log("O JOGO DUROU " + hora + " HORA(S) E " + minuto + " MINUTO(S)");
}
