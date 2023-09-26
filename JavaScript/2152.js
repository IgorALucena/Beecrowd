var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let t = Number(lines.shift());

for(let i = 0; i < t; i++){
    let[h,m,o] = lines.shift().split(" ");
    let resposta;
    if(h.length == 1){
        h = "0" + h;
    }
    if(m.length == 1){
        m = "0" + m;
    }
    if(o == 0){
        resposta = h+":"+m+" - A porta fechou!";
    }
    else{
        resposta = h+":"+m+" - A porta abriu!";
    }
    console.log(resposta);
}
