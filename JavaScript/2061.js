var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let[n,m] = lines.shift().split(" ").map(Number);
let acao;
for(let i = 0; i<m; i++){
    acao = lines.shift();
    if(acao.charAt(0) == "f"){
        n = (n - 1) + 2;
    }
    else{
        n--;
    }
}

console.log(n);
