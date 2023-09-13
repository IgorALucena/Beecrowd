var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a =[];
for(let i = 0; i<100; i++){
    let x = Number(lines.shift());
    a[i] = x;
    if(a[i] <= 10){
        console.log("A["+i+"] = " + (a[i]).toFixed(1));
    }
}