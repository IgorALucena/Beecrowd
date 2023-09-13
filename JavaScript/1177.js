var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = [];
var t = Number(lines.shift());
for(let i = 0; i<1000; i++){
    n[i] = i%t
    console.log("N["+i+"] = " +n[i]);   
}
