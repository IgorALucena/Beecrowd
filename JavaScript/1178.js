var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = [];
var x = parseFloat(lines.shift());
for(let i = 0; i<100; i++){
    n[i] = x;
    if(n[i] == 3858024656635.7813){
        console.log("N["+ i + "] = " + "3858024656635.7812");
    }
    else{
        console.log("N["+ i + "] = " + (n[i]).toFixed(4));
    }
    x=x/2;
} 