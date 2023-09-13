var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let saida = "";
let n = Number(lines.shift())

let algarismo = [
    { valor: 1000, romano: 'M' },
    { valor: 900, romano: 'CM' },
    { valor: 500, romano: 'D' },
    { valor: 400, romano: 'CD' },
    { valor: 100, romano: 'C' },
    { valor: 90, romano: 'XC' },
    { valor: 50, romano: 'L' },
    { valor: 40, romano: 'XL' },
    { valor: 10, romano: 'X' },
    { valor: 9, romano: 'IX' },
    { valor: 5, romano: 'V' },
    { valor: 4, romano: 'IV' },
    { valor: 1, romano: 'I' }
  ];

 

  for (let itens of algarismo) {
    while (n >= itens.valor) {
      saida += itens.romano;
      n -= itens.valor;
    }
  }
  console.log(saida);