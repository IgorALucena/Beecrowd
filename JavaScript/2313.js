var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let lados = lines.shift().trim().split(" ").map(Number);
lados.sort((a, b)=>{
    return b-a;
});

if (lados[0] < lados[1] + lados[2] && lados[1] < lados[0] + lados[2] && lados[2] < lados[0] + lados[1]) {
    if(lados[0] === lados[1] && lados[1] === lados[2]){
        console.log("Valido-Equilatero");
    }
    else if(lados[0] === lados[1] || lados[0] === lados[2] || lados[1] === lados[2]){
        console.log("Valido-Isoceles");
    }
    else{
        console.log("Valido-Escaleno");
    }
} 
else {
    console.log("Invalido");
    return;
}

if (lados[0] * lados[0] == lados[1] * lados[1] + lados[2] * lados[2]) {
    console.log("Retangulo: S");
}
else {
    console.log("Retangulo: N");
}
