var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha = "-";
let lateral = "|";

for(let i = 0; i<38; i++){
  linha+="-";
}
console.log(linha);
for(let i = 0; i<=4; i++){
  console.log(lateral + "                                     " + lateral);
}
console.log(linha);