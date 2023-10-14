var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());

if(n==0){
  console.log("E");
}
else if(n>0 && n<=35){
  console.log("D");
}
else if(n>35 && n<=60){
  console.log("C");
}
else if(n>60 && n<=85){
  console.log("B");
}
else{
  console.log("A");
}
