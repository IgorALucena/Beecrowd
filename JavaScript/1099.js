var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

for (var i = 0; i < n; i++) {
    var [x, y] = lines.shift().split(" ");
    x = Number(x);
    y = Number(y);
    var contador = 0;

    if (Math.min(x, y) == Math.max(x, y)) {
        console.log('0');
    } else {
        var menor = Math.min(x, y) + 1;
        var maior = Math.max(x, y);
        
        if (menor % 2 === 0) {
            menor++;
        }
        
        for (var j = menor; j < maior; j += 2) {
            contador += j;
        }
        
        console.log(contador);
    }
}
