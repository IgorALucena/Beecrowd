var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = 0;

do
{
    x=parseInt(lines.shift());
    
    if(x==0){
        break;
    }

    x = Number(x);
    var soma = 0;

    if(x%2==1 || x%2 == -1){
        x+=1
        for(let i = 1; i<=5; i++){
    
            soma+=x
            x+=2

        }
        console.log(soma)
    }
    else{
        for(let j = 1; j<=5; j++){

            soma+=x
            x+=2
        }
        console.log(soma)
    }
} while (x != 0);
