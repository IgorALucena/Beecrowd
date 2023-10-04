var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
let velocidades = lines.shift().split(" ").map(Number);
let indice = "0";

for(let i = 1; i < n; i++){
    if(velocidades[i]<velocidades[i-1]){
        indice = i;
        break;
    }
}
if(indice == "0"){
    console.log(indice);
}
else{
    console.log(indice+1);
}
