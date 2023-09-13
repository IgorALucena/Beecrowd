var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var contador = 0;
var soma = 0;
var x = null;
while(x != 2){
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
        console.log("media = " +(soma/2).toFixed(2));
        console.log("novo calculo (1-sim 2-nao)");
        var x = Number(lines.shift());
        contador = 0;
        soma = 0;
        if(x>2 || x<=0){
            while(x>2 || x<=0){
                console.log("novo calculo (1-sim 2-nao)");
                x = Number(lines.shift());  
            } 
        }

    }

}