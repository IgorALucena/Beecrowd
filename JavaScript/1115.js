var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


for (var i = 0; i < 1000; i++) {
    
    var [x, y] = lines.shift().split(" ");
    if(x == 0 || y == 0){
        break;
    }
    else if (x > 0 && y > 0) {
        console.log("primeiro");
    }
    else if (x < 0 && y > 0) {
        console.log("segundo");
    }
    else if (x < 0 && y < 0) {
        console.log("terceiro");
    }
    else if (x > 0 && y < 0) {
        console.log("quarto");
    }

}
