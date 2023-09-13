var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines.shift());
for(let i = 0; i<n; i++){
    var[x,y]=lines.shift().split(" ");
    x = Number(x);
    y = Number(y);
    var soma = 0;
    if(x%2==0){
        x+=1
        for(let i = 0; i<y; i++){
    
            soma+=x
            x+=2

        }
        console.log(soma)
    }
    else{
        for(let i = 0; i<y; i++){

            soma+=x
            x+=2
        }
        console.log(soma)
    }
}