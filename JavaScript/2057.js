var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let[s,t,f] = lines.shift().split(" ").map(Number)

let soma = s+t+f;
let diferenca = 0;

if(soma>=24){
    diferenca = Math.abs(24 - soma);
    console.log(diferenca)
}
else if(soma<0){
    diferenca = Math.abs(24 + soma);
    console.log(diferenca);
}
else if(soma == 0){
    console.log(soma);
}
else{
    console.log(soma);    
}