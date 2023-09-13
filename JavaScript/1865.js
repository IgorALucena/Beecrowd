var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = (lines.shift());
let personagem = "";
for(let i = 0; i<n;i++){
     personagem = lines.shift();
     if(personagem.includes("Thor")){
        console.log("Y");
     }
     else{
        console.log("N");
     }
}