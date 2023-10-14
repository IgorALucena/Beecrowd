var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let t = Number(lines.shift());

for(let i = 0 ; i<t; i++){
  console.log("Y");
}
