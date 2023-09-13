var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = lines.shift();

for(var i = 0; i<n; i++){

    var[x,y] = lines.shift().split(" ");
    x = Number(x);
    y = Number(y);

    if(y == 0){
        console.log("divisao impossivel");
    }
    else{
        console.log((x/y).toFixed(1));
    }
}
