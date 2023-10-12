var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
let somaSaque = 0;
let somaBloqueio = 0;
let somaAtaque = 0;
let somaSaque1 = 0;
let somaBloqueio1 = 0;
let somaAtaque1 = 0;

for(let i = 0; i<n; i++){
    let nome = lines.shift();
    let [s,b,a] = lines.shift().trim().split(" ").map(Number);
    let [s1,b1,a1] = lines.shift().trim().split(" ").map(Number);
    somaSaque += s;
    somaBloqueio += b;
    somaAtaque += a;
    somaSaque1 += s1;
    somaBloqueio1 += b1;
    somaAtaque1 += a1;   
}
console.log(`Pontos de Saque: ${((somaSaque1*100)/somaSaque).toFixed(2)} %.
Pontos de Bloqueio: ${((somaBloqueio1*100)/somaBloqueio).toFixed(2)} %.
Pontos de Ataque: ${((somaAtaque1*100)/somaAtaque).toFixed(2)} %.`);