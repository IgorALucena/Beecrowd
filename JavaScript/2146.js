var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length>1){
    let n = Number(lines.shift());
    n-=1;
    console.log(n);
}
