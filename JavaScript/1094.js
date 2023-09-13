var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var contadorC = 0;
var contadorR = 0;
var contadorS = 0;
var contador = 0;

for(var i = 0; i<n; i++){
    var[qtd,tipo] = lines.shift().split(" ");
    qtd = Number(qtd);
    contador+=qtd
    if(tipo == "C"){
        contadorC+=qtd;
    }
    else if(tipo == "R"){
        contadorR+=qtd;
    }
    else{
        contadorS+=qtd;
    }


}
console.log("Total: " + contador + " cobaias");
console.log("Total de coelhos: "+ contadorC);
console.log("Total de ratos: "+ contadorR);
console.log("Total de sapos: " + contadorS);
console.log("Percentual de coelhos: " + (contadorC * 100/contador).toFixed(2) + " %");
console.log("Percentual de ratos: " + (contadorR * 100/contador).toFixed(2) + " %");
console.log("Percentual de sapos: " + (contadorS * 100/contador).toFixed(2) + " %");

