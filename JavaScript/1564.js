var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(true){
    let n = parseInt(lines.shift());
    if(String(n) === "NaN"){
        break;
    }
    else{
        if(n == 0){
            console.log("vai ter copa!");
        }
        else{
            console.log("vai ter duas!");
        }
    
    }
}
