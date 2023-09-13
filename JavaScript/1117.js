var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var contador = 0;
var soma = 0;

for(var i = 0; i<1000; i++){
    var nota = Number(lines.shift());

    if(nota < 0 || nota > 10){
        nota = null;
        console.log("nota invalida");
    }
    else{
        contador++
        soma+=nota;
    }

    if(contador == 2){
        break;
        
    }
    
}
console.log("media = " +(soma/2).toFixed(2));