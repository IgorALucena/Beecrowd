var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a, b] = lines.shift().split(" ")

a = parseInt(a);
b = parseInt(b);

var resto = a%b;
if(resto < 0) 
{
    resto+=Math.abs(b);
}
var quociente = ((a-resto)/b)
let vet = [];

vet[1] = resto;
vet[0] = quociente;

console.log(vet.join(" "));