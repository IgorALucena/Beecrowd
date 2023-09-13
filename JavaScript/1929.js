var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let varetas = lines.shift().split(" ").map(Number);
var A = varetas[0];
var B = varetas[1];
var C = varetas[2];
var D = varetas[3];

if ((A < B + C && B < A + C && C < A + B) || (A < B + D && B < A + D && D < A + B) || (A < C + D && C < A + D && D < A + C) || (B < C + D && C < B + D && D < B + C)) {
    console.log("S");
} else {
    console.log("N");
}