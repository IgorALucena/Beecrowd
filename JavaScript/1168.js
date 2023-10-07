var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const QUANTIDADES = [6,2,5,5,4,5,6,3,7,6];

let n = Number(lines.shift());

for(let i = 0; i<n;i ++){
    let cont = 0;
    let numeros = lines.shift();
    numeros = numeros.trim();
    for(let j = 0; j<numeros.length; j++){
        let indice = numeros[j];
        cont+=Number(QUANTIDADES[indice]); 
    }
    console.log(cont + " leds");   
}