var lines = input.split('\n');

var contAlcool = 0;
var contGasolina = 0;
var contDiesel = 0;
do{
    var codigo = Number(lines.shift());
    switch(codigo){
        case 1:
            contAlcool+=1;
            break;
        case 2:
            contGasolina+=1
            break;
        case 3:
            contDiesel+=1;
            break;
        case 4:
            console.log("MUITO OBRIGADO");
            break;
    }

}while(codigo!=4);

console.log("Alcool: " + contAlcool);
console.log("Gasolina: " + contGasolina);
console.log("Diesel: " + contDiesel);
