var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length>1){

    let n = lines.shift();
    let m = lines.shift().split(" ");
 
    if(Math.max(...m) <10){
        console.log("1");
    }
    else if(Math.max(...m) >10 && Math.max(...m) < 20 ){
        console.log("2")
    }
    else{
        console.log("3")
    }
}
