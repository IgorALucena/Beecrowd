var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines.shift());
let ho = []

for(let i = 0; i<n; i++){
    ho[i] = String("Ho");
}
console.log(ho.join(" ") + "!");

