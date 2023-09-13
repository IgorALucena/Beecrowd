var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let t = Number(lines.shift());

for(let i = 1; i<=t; i++){
    let[a, b] = lines.shift().split(" ").map(String);
    if(a === b){
        console.log("Caso #"+i+": De novo!");
    }
    else if(a == "tesoura" && b == "papel" || a == "tesoura" && b == "lagarto" ){
        console.log("Caso #"+i+": Bazinga!")       
    }
    else if (b == "tesoura" && a == "papel" || b == "tesoura" && a == "lagarto"){
        console.log("Caso #"+i+": Raj trapaceou!")
    }
    else if(a == 'papel' && b == 'pedra' || a == "papel" && b == "Spock" ){
        console.log("Caso #"+i+": Bazinga!")
    }
    else if (b == "papel" && a == "pedra" || b == "papel" && a == "Spock"){
        console.log("Caso #"+i+": Raj trapaceou!")
    }
    else if(a == "pedra" && b == "lagarto" || a == "pedra" && b == "tesoura" ){
        console.log("Caso #"+i+": Bazinga!")
    }
    else if (b == "pedra" && a == "lagarto" || b == "pedra" && a == "tesoura"){
        console.log("Caso #"+i+": Raj trapaceou!")
    }
    else if(a == "lagarto" && b == "Spock" || a == "lagarto" && b == "papel" ){
        console.log("Caso #"+i+": Bazinga!")
    }
    else if(b == "lagarto" && a == "Spock" || b == "lagarto" && a == "papel" ){
        console.log("Caso #"+i+": Raj trapaceou!")
    }
    else if(a == "Spock" && b == "tesoura" || a == "Spock" && b == "pedra" ){
        console.log("Caso #"+i+": Bazinga!")
    }
    else if(b == "Spock" && a == "tesoura" || b == "Spock" && a == "pedra" ){
        console.log("Caso #"+i+": Raj trapaceou!")
    }
    
}
