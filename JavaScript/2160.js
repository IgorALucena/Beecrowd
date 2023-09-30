var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let l = lines.shift();

if(l.length<=80){
    console.log("YES");
}
else{
    console.log("NO");
}