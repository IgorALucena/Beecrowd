var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = 1;
while(true){
    let vet = [];
    vet[0] = 0;
    let n = lines.shift();
    if(n == ""){
        break;
    }
    n=Number(n);
    if(isNaN(n)){
        break;
    }
    for(let i = 1; i<=n;i++){
        for(let j = 0; j<i; j++){
            vet.push(i);
        }
    }
    if(vet.length==1){
        console.log("Caso " + x + ": " + vet.length + " numero");
    }
    else{
        console.log("Caso " + x + ": " + vet.length + " numeros");
    }
    console.log(vet.join(" ") + "\n");    
    x++
}