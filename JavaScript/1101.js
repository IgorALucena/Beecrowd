var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (var i = 0; i <= 1000; i++) {
    var [m, n] = lines.shift().split(" ");
    m = Number(m);
    n = Number(n);
    var menor = Math.min(m,n);
    var maior = Math.max(m,n);
    var contador = null;
    var contadorSoma = 0;
    if(m <= 0 || n <= 0){
    break;
    }
    else{
        for(var i = menor; i<=maior; i++){
            contador = contador+i + " ";
            contadorSoma+=i;
        }
    }

    console.log(contador + "Sum=" + contadorSoma);    
}  
