var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let[p,j1,j2,r,a] = lines.shift().split(" ").map(Number);
let soma = j1+j2;
let imparOuPar = 0;

if (soma % 2 != 0){
    imparOuPar = 1; 
}
else{
    imparOuPar = 0;
}

if (r==0 && a==1){
    console.log("Jogador 1 ganha!");
}
else if (r==1 && a==0){
    console.log("Jogador 1 ganha!");
}
else if (r==1 && a==1){
    console.log("Jogador 2 ganha!");
}
else if (p==1 && imparOuPar==0 && r==0 && a==0){
    console.log("Jogador 1 ganha!");
}
else if (p==1 && imparOuPar==1 && r==0 && a==0){
    console.log("Jogador 2 ganha!");
}
else if (p==0 && imparOuPar==1 && r==0 && a==0 ){
    console.log("Jogador 1 ganha!");
}
else if (p==0 && imparOuPar==0 && r==0 && a==0){
    console.log("Jogador 2 ganha!");
}