var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(var i = 1; i<10; i+=2){
    for(var j = 7; j>=5; j--){
        console.log("I=" + i + " J=" + j);
    }
    
    
}