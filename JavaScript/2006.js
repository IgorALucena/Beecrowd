var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let t = Number(lines.shift());
let palpites = lines.shift().split(" ").map(Number);
let contador = 0;

for(let i = 0; i<palpites.length; i++){
    if(palpites[i]==t){
        contador++
    }
}
console.log(contador);