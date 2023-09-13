var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(true){
    let calculo = null;
    let resultado = null;
    let [a, b, c] = lines.shift().split(" ");
    if(a == 0){
        break;
    }
    calculo = ((a * b * 100)/c)
    resultado = Math.sqrt(calculo);
    console.log(parseInt(resultado));


    
}

