var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(true){
    let [x, m] = lines.shift().trim().split(" ").map(Number);
    if(x == 0 && m == 0){
        break;
    }
    else{
        let resultado = x*m;
        console.log(resultado);
    }
}