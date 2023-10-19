var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (lines.length > 1) {
  let [l, c] = lines.shift().trim().split(" ").map(Number);
  let matriz = [];
  for (let i = 0; i < l; i++) {
    matriz[i] = lines.shift().trim().split(" ").map(Number);
  }
  let posicaoAnaloI, minhaPosicaoI, posicaoAnaloJ, minhaPosicaoJ, resultado;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < c; j++) {
      if (matriz[i][j] == 1) {
        minhaPosicaoI = i;
        minhaPosicaoJ = j;
      }
      else if (matriz[i][j] == 2) {
        posicaoAnaloI = i;
        posicaoAnaloJ = j;
      }
    }
  }
  resultado = Math.abs(posicaoAnaloI - minhaPosicaoI) + Math.abs(posicaoAnaloJ - minhaPosicaoJ);
  console.log(resultado);
}