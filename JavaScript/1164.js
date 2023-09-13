var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var t = Number(lines.shift());

for(let i=1; i<=t; i++){

    let cont = 0;
    var x = Number(lines.shift());
    for(let j = 0; j<x; j++){
        if(x%j == 0){
            cont+=j;   
        }
        
    }
    if(cont == x){
        console.log(x + " eh perfeito");
    }
    else{
        console.log(x + " nao eh perfeito");
    }
   
}

