var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
  let d = lines.shift();
  if (d == "") {
    break;
  }
  else {
    d=Number(d);
    let soma1 = 0;
    let soma2 = 0;
    for (let i=0; i<d; i++) {
      let [nota, hora] = lines.shift().trim().split(" ").map(Number);
      soma1 = soma1 + nota * hora;
      soma2 = soma2 + hora;
    }
    let ira = soma1 / (soma2 * 100);
    console.log(ira.toFixed(4));
  }
}