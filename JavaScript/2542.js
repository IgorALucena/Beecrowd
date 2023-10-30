var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (lines.length > 1){
    let atributos = lines.shift();
    if(atributos == ""){
        break;
    }
    else{
        atributos = Number(atributos);
        let[m,l] = lines.shift().trim().split(" ").map(Number);
        let cartasM = [];
        let cartasL = [];
        for(let i = 0; i<m; i++){
            cartasM[i] = lines.shift().trim().split(" ").map(Number);

        }
        for(let i = 0; i<l; i++){
            cartasL[i] = lines.shift().trim().split(" ").map(Number);

        }
        let selecao = lines.shift().trim().split(" ").map(Number);
        let atributo = Number(lines.shift());
        let escolhaM = cartasM[(selecao[0]-1)][atributo - 1];
        let escolhaL = cartasL[(selecao[1]-1)][atributo - 1];
        if(escolhaM > escolhaL){
            console.log("Marcos")
        }
        else if(escolhaL > escolhaM){
            console.log("Leonardo");
        }
        else{
            console.log("Empate")
        }
    }
}