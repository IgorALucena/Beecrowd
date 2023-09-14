var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [p,n] = lines.shift().split(" ").map(Number);
var torres = lines.shift().split(" ").map(Number);
let conseguiu = false;

for(let i = 0; i<n-1; i++){
    if((Math.abs(torres[i] - torres[i+1])) <= p){
        conseguiu = true;    
    }
    else{
        conseguiu = false;
        break;
    }

}

if(conseguiu){
    console.log("YOU WIN");
}
else{
    console.log("GAME OVER");
}