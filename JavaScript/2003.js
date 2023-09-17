var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length>=1){
    let acordou = lines.shift().split(":").map(Number);
    if(String(acordou) == "0"){
        break;
    }
    else{
        if(acordou[0] == 9){
            console.log("Atraso maximo: " + (120 + acordou[1]));
        }
        else if(acordou[0] == 8){
            console.log("Atraso maximo: " + (60 + acordou[1]));
        }
        else if (acordou[0] == 7){
            console.log("Atraso maximo: " + acordou[1]);
        }
        else{
            console.log("Atraso maximo: " + 0);
        }
    }
}
   