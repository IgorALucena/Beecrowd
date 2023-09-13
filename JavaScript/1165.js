var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines.shift());

for(let i=1; i<=n; i++){
    var resultado = 0;
    var x = Number(lines.shift());
    for(let j = 2; j<x; j++){
        if(x%j == 0){
            resultado++
        }
    }
    if(resultado == 0){
        console.log(x + " eh primo");       
    }
    else{
        console.log(x + " nao eh primo");
    }
   
}
