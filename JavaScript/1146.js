var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let vetor = [];
while(x!=0){
  var x = lines.shift();
  if(x!=0){
    for(let i = 1; i<=x; i++){
    vetor.push(i);
    }
  }
  else{
    break;
  }
  console.log(vetor.join(" "));
  vetor = [];
}
