var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 1;
while(lines.length>1) {
  let n1 = lines.shift();
  let n2 = lines.shift();

  const REGEX = new RegExp(n1, 'g');
  
  let ocorrencia = n2.match(REGEX);

  if (!ocorrencia) {
    console.log("Caso #"+(i++)+":");
    console.log("Nao existe subsequencia\n");
  } 
  else {
    console.log("Caso #"+(i++)+":");
    console.log("Qtd.Subsequencias: " + ocorrencia.length);
    console.log("Pos: " + (n2.lastIndexOf(ocorrencia[0]) + 1) + "\n");
  }
}