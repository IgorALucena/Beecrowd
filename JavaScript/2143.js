var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(true){
    let n, soma; 
    let t = Number(lines.shift());
    if(t==0){
        break;
    }
    else{
        for(let i = 0; i<t; i++){
            n = Number(lines.shift());
            if(n%2==0){
                soma = n * 2 - 2;
            }
            else{
                soma = n * 2 - 1;
            }
            console.log(soma);
        }
    }
}