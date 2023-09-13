var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var l = Number(lines.shift());
var t = String(lines.shift());
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
for(let i = 0; i<colunas.length; i++){
    for(let j = 0; j<colunas.length; j++){
        if(l == i) {
            soma+=colunas[i][j];
        }
    }   
}

if(t.charAt(0) == "M"){
    console.log((parseFloat(soma/12).toFixed(1)));
}
else {
    console.log(soma.toFixed(1));
}
