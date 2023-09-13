var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
let curso = "";
for(let i = 0; i<n; i++){
    curso = lines.shift();
    curso = "Ciencia da Computacao"
}

console.log(curso);