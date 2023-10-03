var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length>1){
    let n = Number(lines.shift());
    let matriz=[]
    let comeco = Math.floor(n/3);
    let final = n - comeco;
    let meio = Math.floor(n/2);
    for(let i = 0; i<n; i++){
        matriz[i] = new Array(n);
    }
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) {
            if(i==meio && j==meio){
                matriz[i][j] = 4;
            }
            else if(i>=comeco && i<final && j>=comeco && j<final ){
                matriz[i][j] = 1;
            }
            else if(i==j){ 
                matriz[i][j] = 2;
            }
            else if(i+j == n-1){ 
                matriz[i][j] = 3;
            }
            else{
                matriz[i][j] = 0;
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
    console.log();
}
