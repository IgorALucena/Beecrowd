var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());

let p = n / Math.log(n);
var m = (1.25506 * n) / Math.log(n);

console.log(p.toFixed(1) + " " + m.toFixed(1));
