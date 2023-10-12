var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());

for(let i = 0; i<n; i++){
    let somaSaltos = 0;
    let nome = lines.shift().trim();
    let dificuldade = Number(lines.shift());
    let saltos = lines.shift().trim().split(" ").map(Number);
    saltos.sort((a,b)=>{
        return a-b;
    })
    for(let j = 1; j<saltos.length-1; j++){
        somaSaltos+=saltos[j];
    }
    somaSaltos*=dificuldade;
    console.log(nome + " " + somaSaltos.toFixed(2));

}