var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(true){
  let alfabeto = lines.shift();
  let palavra = "";
  if(alfabeto == ""){
    break;
  }
  else{
    let n = Number(lines.shift());
    let posletras = lines.shift().trim().split(" ").map(Number);
    for(let i = 0; i<posletras.length; i++){
      palavra += alfabeto.charAt(posletras[i]-1);
    }
    console.log(palavra);
  }
}
