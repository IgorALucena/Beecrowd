var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do{
    var lines = input.split(" ");
}while(lines[-1] <=0);
var a = parseInt(lines[0]);
var n = parseInt(lines[lines.length-1]);
var cont = 0;

for(var i = 0; i<n; i++){
    cont = cont + (a+i)
}
console.log(cont)