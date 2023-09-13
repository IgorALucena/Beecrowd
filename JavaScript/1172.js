var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x =[];
for(let i = 0; i<10; i++){
    x[i] = Number(lines.shift());
    if(x[i] == 0 || x[i] < 0){
        x[i] = 1;    
    }
}
for(let i = 0; i<x.length; i++){
    console.log("X["+i+"] = " + x[i]);

}
