var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let[n,m] = lines.shift().split(" ").map(Number);
 let matriz = [];
 let valores = [];
 let quebraValores = [];
 let resultado = "0 0";
for(let i = 0; i<n; i++){ 
    matriz[i] = new Array(m);
    valores[i] = lines.shift().trim();   
}
for(let i = 0; i<n; i++){
    quebraValores = valores[i].split(" ").map(Number);
    for(let j = 0; j<m; j++){
        matriz[i][j] = quebraValores[j];
    }
 }
for(let i = 1; i<n-1; i++){
    for(let j = 1; j<m-1; j++){
        if(matriz[i][j] == 42 && 
            matriz[i][j+1] == 7 && 
            matriz[i][j-1] == 7 && 
            matriz[i-1][j] == 7 && 
            matriz[i-1][j-1] == 7 && 
            matriz[i-1][j+1] == 7 && 
            matriz[i+1][j] == 7 && 
            matriz[i+1][j-1] == 7 && 
            matriz[i+1][j+1] == 7){
            resultado = (i+1) + " " + (j+1);
            break;
        }
    }
 }
console.log(resultado);