var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
let h = lines.shift().split(" ").map(Number);
let resultado;

for(let i = 0; i<n; i++){
    if(h[i] == h[i+1]){
        resultado = 0;
        break;
    }
    else if(
        (h[i]>h[i+1] && h[i+1]>h[i+2]) || 
        (h[i]<h[i+1] && h[i+1]<h[i+2])
    ){
        resultado = 0;
        break;
    }
    else{
        resultado = 1;
    }
}
console.log(resultado);