var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];
let tamanhos = [];
while(true){
    let n = Number(lines.shift());
    if(n==0){
        break;
    }
    tamanhos.push(n);

    for(let i = 0; i<n; i++){
        matriz[i] = new Array(n);
    }
    for(let i = 0; i<n; i++){
        for(let j = 0; j<n; j++){
            matriz[i][j] = 0;
        }
    }
    let minValor = 0;
    let maxValor = n - 1;
    let preenchimento = tamanhos[0];
    for(let x = 0; x<n; x++){
        for(let i = 0; i<n; i++){
            for(let j = 0; j<n; j++){
                if(matriz[i][j] == 0){
                    if(i == minValor || i == maxValor || j == minValor || j == maxValor){
                        matriz[i][j] = preenchimento;
                    }
                }

            }

        }
        preenchimento++;
        minValor++;
        maxValor--;
    }
    for (let i = 0; i < n; i++) {
        let linha = '';
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j].toString().padStart(3, ' ') + ' ';
        }
        console.log(linha.trimRight());
    }
    console.log();
}
