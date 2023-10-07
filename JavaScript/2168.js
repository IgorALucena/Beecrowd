var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];
let n = Number(lines.shift());
n+=1;

for (let i = 0; i < n; i++) {
    matriz[i] = lines.shift().trim().split(" ").map(Number);
    
}
for(let i = 0; i<n-1; i++){
    let resposta = "";
    for(let j = 0; j<n-1; j++){
        if((matriz[i][j] + matriz[i][j+1] + matriz[i+1][j] + matriz[i+1][j+1]) > 1){
            resposta+="S"
        }
        else{
            resposta+="U"
        }
    }
    console.log(resposta);
}