var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
  let t = Number(lines.shift());
  if (t == 0 || isNaN(t)) {
    break;
  }
  let operacoes = [];
  let jogadores = [];

  for (let i = 0; i < t; i++) {
    operacoes[i] = lines.shift().replace("=", " ").trim().split(" ").map(Number);
  }
  for (let i = 0; i < t; i++) {
    jogadores[i] = lines.shift().trim().split(" ");
  }
  let operacao = [];
  for (let i = 0; i < t; i++) {

    if (operacoes[i][0] + operacoes[i][1] == operacoes[i][2]) {
      operacao.push("+");
    }
    else if (operacoes[i][0] * operacoes[i][1] == operacoes[i][2]) {
      operacao.push("*");
    }
    else if (operacoes[i][0] - operacoes[i][1] == operacoes[i][2]) {
      operacao.push("-");
    }
    else {
      operacao.push("I");
    }

  }
  let perdedores = [];
  for (let i = 0; i < t; i++) {
    let opcao = (jogadores[i][1] - 1);
    if (jogadores[i][2] != operacao[opcao]) {
      perdedores.push(jogadores[i][0]);
    }
  }
  perdedores.sort();
  if (perdedores.length === 0) {
    console.log("You Shall All Pass!");
  } else if (perdedores.length === t) {
    console.log("None Shall Pass!");
  } else {
    console.log(perdedores.join(" ").trim());
  }
}