var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines.shift());
var soma = 1;
for(var i = 1; i<=n; i++){
    
    console.log(soma + " " + (soma +1) + " " + (soma+2) + " PUM");
    soma+=4;
}

