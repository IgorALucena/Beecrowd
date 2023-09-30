var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length>1){
    let n = Number(lines.shift());
    let matriz=[]
    for(let i = 0; i<n; i++){
        matriz[i] = new Array(n);

    }
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) {
            if(j+i == n-1){ 
                matriz[i][j] = 2
            }
            else if(i==j){ 
                matriz[i][j] = 1
            }
            else{
                matriz[i][j] = 3;
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        let linha = "";
        for (let j = 0; j < n; j++) {
            linha += matriz[i][j]; 
        }
        console.log(linha);
    }
}