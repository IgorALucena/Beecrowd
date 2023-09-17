var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let quantidadeProdutos = Number(lines.shift());
let produtoQuant = 0;
let soma = 0;
for(let i = 0; i<quantidadeProdutos; i++){
    produtoQuant = lines.shift().split(" ").map(Number);
    switch(produtoQuant[0]){
        case 1001:
            soma+=(1.50*produtoQuant[1]);
            break;
        case 1002:
            soma+=(2.50*produtoQuant[1]);
            break;
        case 1003:
            soma+=(3.50*produtoQuant[1]);
            break;
        case 1004:
            soma+=(4.50*produtoQuant[1]);
            break;
        case 1005:
            soma+=(5.50*produtoQuant[1]);
            break;
    }
}
console.log(soma.toFixed(2));
