var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let negativo = lines[0][0];
let v = Number(lines.shift());
let convertido = v.toExponential(4).toUpperCase();
let separado = 0;
let resultado = 0;

separado = convertido.split("E");

if(separado[1].slice(1) >= 0 && separado[1].slice(1) < 10){
    separado[1] = separado[1].slice(0,1)+"0"+separado[1].slice(1);
    resultado = separado[0] +"E"+ separado[1]  
}
else{
    resultado = separado[0]+"E"+separado[1];
}

if(!(convertido.startsWith("-"))){
    if(v===0 && negativo==="-"){
        console.log("-"+resultado)
    }
    else{
        console.log("+"+resultado);  
    }    
}
else{
    console.log(resultado);
}
