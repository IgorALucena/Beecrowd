var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n =[];
let x = Number(lines.shift());
for(let i = 0; i<10; i++){
    n[i] = x;
    x = x + x
}
for(let j = 0; j<n.length; j++){
    console.log("N["+j+"] = " + n[j]);

}