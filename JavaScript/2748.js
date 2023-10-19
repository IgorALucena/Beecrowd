var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha = "-";
let lateral = "|";

for(let i = 0; i<38; i++){
  linha+="-";
}
console.log(linha);
for(let i = 0; i<=4; i++){
  if(i==0){
    console.log(lateral + "        Roberto                      " + lateral);
  }
  else if(i == 2){
    console.log(lateral + "        5786                         " + lateral);
  }
  else if(i == 4){
    console.log(lateral + "        UNIFEI                       " + lateral);
  }
  else{
    console.log(lateral + "                                     " + lateral);
  }
}
console.log(linha);
