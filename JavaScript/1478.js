var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];

while (true) {
    let n = Number(lines.shift());
    if (n == 0) {
        break;
    }

    for (let i = 0; i < n; i++) {
        matriz[i] = new Array(n);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let menor = Math.min(i, j);
            let maior = Math.max(i, j);
            matriz[i][j] = maior - menor + 1;
        }
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

