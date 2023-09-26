var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let c = Number(lines.shift());

for(let i = 0; i<c; i++){
    let palavra = lines.shift();
    let soma = 0;
    for(let j = 0; j<palavra.length; j++){
        soma+=0.01;
    }
    console.log(soma.toFixed(2));
}
