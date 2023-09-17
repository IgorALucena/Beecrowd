var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
let matriculaNota = [];
let maior = 0;
let matriculaMaior = 0;
for(let i = 0; i<n; i++){
    matriculaNota = lines.shift().split(" ").map(Number);
    if(maior<matriculaNota[1]){
        maior = matriculaNota[1];
        matriculaMaior = matriculaNota[0];
    }
    
}

if(maior>=8){
    console.log(matriculaMaior);
}
else{
    console.log("Minimum note not reached");
}