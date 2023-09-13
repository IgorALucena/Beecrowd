var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var o = String(lines.shift());
var soma = 0;
var colunas = new Array(12);
var contJ = 1;
var contI = 0;
var contador = 0;



for(let i = 0; i<colunas.length; i++){
        colunas[i] = new Array(12);
}

for(let i = 0; i<colunas.length; i++){
    for(let j = 0; j<colunas.length; j++){
        colunas[i][j] = parseFloat(lines.shift());
    
    }
}


for(let i = 0 ; i<1; i++){
    soma+=colunas[i][1]; 
}
for(let i = 0 ; i<2; i++){
    soma+=colunas[i][2]; 
}
for(let i = 0 ; i<3; i++){
    soma+=colunas[i][3]; 
}
for(let i = 0 ; i<4; i++){
    soma+=colunas[i][4]; 
}
for(let i = 0 ; i<5; i++){
    soma+=colunas[i][5]; 
}
for(let i = 0 ; i<5; i++){
    soma+=colunas[i][6]; 
}
for(let i = 0 ; i<4; i++){
    soma+=colunas[i][7]; 
}
for(let i = 0 ; i<3; i++){
    soma+=colunas[i][8]; 
}
for(let i = 0 ; i<2; i++){
    soma+=colunas[i][9]; 
}
for(let i = 0 ; i<1; i++){
    soma+=colunas[i][10]; 
}


if(o.charAt(0) == "M"){
    console.log(parseFloat(soma/30).toFixed(1));
}
else {
    console.log(soma.toFixed(1));
}