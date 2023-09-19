var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());

for(let i = 0; i<n; i++){
    let jogador1 = lines.shift();
    let jogador2 = lines.shift();
    
    if(jogador1 == "ataque"){
        if(jogador2 == "ataque"){
            console.log("Aniquilacao mutua");
        }
        else{
            console.log("Jogador 1 venceu");
        }
    }
    else if(jogador2 == "ataque"){
        if(jogador1 == "ataque"){
            console.log("Aniquilacao mutua");
        }
        else{
            console.log("Jogador 2 venceu");
        }
    }
    else if(jogador1 == "pedra" && jogador2 == "papel"){
        console.log("Jogador 1 venceu");
        
    }
    else if(jogador2 == "pedra" && jogador1 == "papel"){
        console.log("Jogador 2 venceu");
    }
    else if(jogador1 == "pedra" && jogador2 == "pedra" || jogador2 == "pedra" && jogador1 == "pedra"){
        console.log("Sem ganhador");
    }
    else{
        console.log("Ambos venceram");
    }
}
