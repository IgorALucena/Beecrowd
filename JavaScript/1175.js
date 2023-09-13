var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n =[];
for(let i = 0; i<20; i++){
    let x = Number(lines.shift());
    n[i] = x;
}
let inverso = n.reverse();
for(let i = 0; i<inverso.length; i++){
    console.log("N["+i+"] = " + inverso[i]);
}
