var lines = input.split('\n');

while (lines.length > 1) {
  let n = Number(lines.shift());
  let votos = lines.shift().trim().split(" ").map(Number);
  let contador = 0;
  for (let voto of votos) {
    if (voto === 1) {
      contador++;
    }
  }
  if (contador >= (2/3) * n) {
    console.log("impeachment");
  } 
  else {
    console.log("acusacao arquivada");
  }
}