var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
let valor = 0;
let resultado;

for(let i = 0; i<n; i++){
    valor = 1/(6+valor);
}
resultado = valor + 3;
console.log(resultado.toFixed(10));