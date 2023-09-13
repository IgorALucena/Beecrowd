var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines.shift());
var fatorial = 1;
for(let i = 1; i<n+1; i++){
    fatorial*= i;
}
console.log(fatorial);
