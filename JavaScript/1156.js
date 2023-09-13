var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var s = 1 ;
var seg = 2;
var n = 3;

for(let i = 1; i<=40; i++){
    s+= n/seg;
    n+=2;
    seg*=2;    
}   
console.log(s.toFixed(2));
