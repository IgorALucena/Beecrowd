var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = 0, z = 0;

x=parseInt(lines.shift());
do
{
    z=parseInt(lines.shift());

} while (z <= x);
if(z == 0){
  var i = 0;
  soma = x;
    while(soma<=z){
        soma+=x++
        i++;
  
    }
    console.log(i)
}

else{
    var cont = 0;

    for(var i = x; i<=z; i++){
        i = i +x;
        cont++;
    }
    console.log(cont)

}
