var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var indice =0;
var contador = 0;
var vetor = [];
for(var i = 0; i<100; i++){
    vetor[i] = Number(lines.shift());   
    if(vetor[i]>contador){
        contador = vetor[i];
        indice = i+1;
    }
}
console.log(contador);
console.log(indice);
