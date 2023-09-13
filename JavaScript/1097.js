var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(var i = 1; i<10; i+=2){
    for(var j = i + 6 ; j>=i+4; j--){
        console.log("I=" + i + " J=" + j);
        
    }
    
    
}