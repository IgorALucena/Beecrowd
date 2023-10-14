var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
let felizNatal = "Feliz nat";

for(i = 0; i<n; i++){
  felizNatal+="a";
}
felizNatal+="l!"
console.log(felizNatal);