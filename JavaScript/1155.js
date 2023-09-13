var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var s = 0 ;
var inicial = 1;
for(let i = 1; i<=100; i++){
   
    s += inicial/i ;
    
}
console.log(s.toFixed(2));
