var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var t = Number(lines.shift());
var cont = 0;

while(cont<t){
    var[r1,r2] = lines.shift().split(" ").map(Number);

    let resultado = r1 + r2;

    console.log(resultado);

    cont++
}
