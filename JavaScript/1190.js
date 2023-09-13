var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var o = String(lines.shift());
var soma = 0;
var colunas = new Array(12);


for(let i = 0; i<colunas.length; i++){
    colunas[i] = new Array(12);
}

for(let i = 0; i<colunas.length; i++){
    for(let j = 0; j<colunas.length; j++){
        colunas[i][j] = parseFloat(lines.shift());
    
    }
}

for(let i = 1 ; i<11; i++){
    soma+=colunas[i][11]; 
}
for(let i = 2 ; i<10; i++){
    soma+=colunas[i][10]; 
}
for(let i = 3 ; i<9; i++){
    soma+=colunas[i][9]; 
}
for(let i = 4 ; i<8; i++){
    soma+=colunas[i][8]; 
}
for(let i = 5 ; i<7; i++){
    soma+=colunas[i][7]; 
}

if(o.charAt(0) == "M"){
    console.log(parseFloat(soma/30).toFixed(1));
}
else {
    console.log(soma.toFixed(1));
}
