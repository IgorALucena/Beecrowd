var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var t = Number(lines.shift());

for(let i=1; i<=t; i++){
    
    var[pa,pb,g1,g2] = lines.shift().split(" ").map(Number);
    let cont = 0;

    while(pa<=pb){
        pa += parseInt(pa*(g1/100));
        pb += parseInt(pb*(g2/100));
        cont++
        if(cont>100){
              break;
        }
        
    }
    if(cont>100){
        console.log("Mais de 1 seculo.")

    }
    else{
        console.log(cont + " anos.")
    }
    

}