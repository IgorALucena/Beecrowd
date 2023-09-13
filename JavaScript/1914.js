var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qt = Number(lines.shift());

for(let i = 0; i<qt; i++){
    let escolha = lines.shift().split(" ");
    let numeros = lines.shift().split(" ").map(Number);
    if(escolha[1].includes("PAR") && escolha[3].includes("IMPAR")){
        if((numeros[0] + numeros[1])%2===0){
            console.log(escolha[0]);
        }
        else{
            console.log(escolha[2]);
        }
        
    }
    else if(escolha[1].includes("IMPAR") && escolha[3].includes("PAR")){
        if((numeros[0]+numeros[1])%2!==0){
            console.log(escolha[0]);
        }
        else{
            console.log(escolha[2]);
        }
    }
}