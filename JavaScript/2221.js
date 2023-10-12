var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let instancia = Number(lines.shift());

for(let i = 0; i<instancia; i++){
    let bonus = Number(lines.shift());
    let[aD,dD,lD] = lines.shift().trim().split(" ").map(Number);
    let[aG,dG,lG] = lines.shift().trim().split(" ").map(Number);
    let valorGolpeD = ((aD + dD)/2);
    let valorGolpeG = ((aG + dG)/2);
    
    if(lD%2 == 0){
        valorGolpeD+=bonus;
    }
    if(lG%2 == 0){
        valorGolpeG+=bonus;
    }

    if(valorGolpeD>valorGolpeG){
        console.log("Dabriel");
    }
    else if(valorGolpeD<valorGolpeG){
        console.log("Guarte");
    }
    else{
        console.log("Empate");
    }
}