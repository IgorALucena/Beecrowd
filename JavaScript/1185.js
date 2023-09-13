var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var o = String(lines.shift());
var soma = 0;
var colunas = new Array(12);
var contJ = 0;
var contI = 11;



for(let i = 0; i<colunas.length; i++){
        colunas[i] = new Array(12);
}

for(let i = 0; i<colunas.length; i++){
    for(let j = 0; j<colunas.length; j++){
        colunas[i][j] = parseFloat(lines.shift());
    
    }
}


while(contJ<11){


        for(let i = 0; i<contI; i++){
            soma+=colunas[i][contJ];
        }
        contJ++
        contI--
        
}   
    
if(o.charAt(0) == "M"){
    console.log(parseFloat(soma/66).toFixed(1));
}
else {
    console.log(soma.toFixed(1));
}