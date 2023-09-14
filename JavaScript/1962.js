var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines.shift());
var anos = 0;
const ANOFINAL = 2015;
var diferenca = 0;
for(let i = 0; i<n; i++){
    anos = Number(lines.shift());

    diferenca = Math.abs(anos - ANOFINAL);

    if(anos >= ANOFINAL){
        console.log((diferenca+1) + " A.C.");
    }
    else if(anos<ANOFINAL){
        
        console.log((diferenca) + " D.C.");
    }
}
    