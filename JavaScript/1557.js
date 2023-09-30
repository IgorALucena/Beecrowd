var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];

while (true) {
    let n = Number(lines.shift());
    if (n == 0) {
        break;
    }
    let x = 1;
    let y = 2;
    for (let i = 0; i < n; i++) {
        matriz[i] = new Array(n);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <n; j++) {
            matriz[i][j] = 2**(i+j);
        }
    }
    let t = String(matriz[n-1][n-1]).length;
    for (let i = 0; i < n; i++) {
        let linha = '';
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j].toString().padStart(t, ' ') + ' ';
        }
        console.log(linha.trimRight());
    }
    console.log();
}
