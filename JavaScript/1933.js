var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let vet = [];

vet = lines.shift().split(" ").map(Number);

vet.sort(function(a,b){
    return b-a;
})
let c = vet[0];

console.log(c);
