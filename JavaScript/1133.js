var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = Number(lines.shift());
var y = Number(lines.shift());
var soma = 0;
var menor = Math.min(x, y);
var maior = Math.max(x, y);
for(var i = menor+1; i<maior; i++){
    if(i%5 == 2 || i%5 == 3){
        console.log(i); 
    }
}
