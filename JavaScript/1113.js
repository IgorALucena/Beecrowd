var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (var i = 0; i <= 1000; i++) {
    var [x, y] = lines.shift().split(" ");
    x = Number(x);
    y = Number(y);
    if(x>y){
        console.log("Decrescente");
    }
    else if(y>x){
        console.log("Crescente");
    }
    else{
        break;
    }
}
