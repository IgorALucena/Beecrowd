var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x= null;
var contadorI = 0;
var contadorG = 0;
var contadorEmpate = 0
var contadorGrenal = 0;
var resultado = null;

do{
    contadorGrenal+=1
    var [i, g] = lines.shift().split(" ");
    i = Number(i);
    g = Number(g);
    if(i > g){
        contadorI+=1
    }
    else if (i==g){
        contadorEmpate+=1
    }
    else{
        contadorG+=1
    }

    if(contadorI>contadorG){
        resultado = "Inter venceu mais"
    }
    else{
        resultado = "Gremio venceu mais"
    }
    console.log("Novo grenal (1-sim 2-nao)");
    x = Number(lines.shift());

}while(x != 2)
console.log(contadorGrenal+ " grenais");
console.log("Inter:" + contadorI);
console.log("Gremio:" + contadorG);
console.log("Empates:" + contadorEmpate);
console.log(resultado);
