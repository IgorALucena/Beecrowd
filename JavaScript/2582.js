var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
const MUSICAS = ["PROXYCITY", "P.Y.N.G.","DNSUEY!","SERVERS","HOST!","CRIPTONIZE","OFFLINE DAY","SALT","ANSWER!","RAR?","WIFI ANTENNAS"];

for (let i = 0; i < x; i++) {
  let y = lines.shift().trim().split(" ").map(Number);
  let soma = y[0] + y[1];
  console.log(MUSICAS[soma]);
}