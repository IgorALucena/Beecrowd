var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(var i = 0; i<=2.1; i+=0.2){
    for(var j = 1; j<4; j++){
        if(i == 0.6000000000000001){
            console.log("I=" + i.toFixed(1) + " J=" + (j + i));
        }
        else if(i == 1.5999999999999999 || i == 1.7999999999999998){
            console.log("I=" + i.toFixed(1) + " J=" + (j + i).toFixed(1));
        }
        else if(i == 1.9999999999999998){
            console.log("I=" + i.toFixed(0) + " J=" + (j + i).toFixed(0));
        }
        else{
            console.log("I=" + i + " J=" + (j + i));
        }
    }
    
    
}