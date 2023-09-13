var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var soma = 0;
var idade = 0;
contador = 0;
while(idade>=0){
    idade = Number(lines.shift());

    if(idade>=0){
        soma+=idade;
        contador++
    }


}
console.log((soma/contador).toFixed(2));
