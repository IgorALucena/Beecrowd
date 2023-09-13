var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let c = Number(lines.shift());
let numero = 0;
let cont = 0;

while(cont<c){
    let n = Number(lines.shift());
    for(let i = 1; i<=n; i++){
        if(i%2 == 0){
            numero-=1;
        }
        else{
            numero+=1;
        }
        
   }
   console.log(numero);
   numero = 0;
   cont++

}