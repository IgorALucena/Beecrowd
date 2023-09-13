var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do{
    var senha = lines.shift();
    if(senha!= "2002"){
        console.log("Senha Invalida");
    }

}while(senha != "2002");

console.log("Acesso Permitido");
