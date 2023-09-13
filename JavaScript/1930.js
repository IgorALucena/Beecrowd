var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let resultado = 0;
let t = lines.shift().split(" ").map(Number);
for(let i = 0; i<4; i++){
    
    if(i<3){
        resultado= resultado + (t[i]-1);
    }
    else{
        resultado+=t[i];
    }

}
console.log(resultado);
