var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [x,y] = lines.shift().split(" ");

x = Number(x);
y = Number(y);


for(var i = 1; i<=y; i++){
    process.stdout.write(i.toString());
    if(i%x == 0){
        process.stdout.write("\n");
    }
    else{
        process.stdout.write(" ");
    }
}