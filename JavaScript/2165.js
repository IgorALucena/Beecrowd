var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let t = lines.shift();

if(t.length<=140){
    console.log("TWEET");
}
else{
    console.log("MUTE");
}
