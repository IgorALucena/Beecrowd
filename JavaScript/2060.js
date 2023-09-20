var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());
let nums = lines.shift().split(" ").map(Number);
let contDois = 0;
let contTres = 0;
let contQuatro = 0;
let contCinco = 0;

for(let i = 0; i<n; i++){
    if(nums[i]%2 == 0){
        contDois++;
    }
    if(nums[i]%3 == 0){
        contTres++;
    }
    if(nums[i]%4 == 0){
        contQuatro++;
    }
    if(nums[i]%5 == 0){
        contCinco++;
    }
}

console.log(`${contDois} Multiplo(s) de 2
${contTres} Multiplo(s) de 3
${contQuatro} Multiplo(s) de 4
${contCinco} Multiplo(s) de 5`);
