var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const MESES= [31,29,31,30,31,30,31,31,30,31,30,25];
while(lines.length>1){
  let[mes, dia] = lines.shift().split(" ").map(Number);
  let diferencaDias = 0;
  if(mes == 12 && dia == 24){
    
    console.log("E vespera de natal!");
  }
  else if(mes == 12 && dia == 25){
    console.log("E natal!");
  }
  else if(mes == 12 && dia>25){
    console.log("Ja passou!");
  }
  else{
    for(let i = mes-1; i<MESES.length; i++){
        diferencaDias+=MESES[i];
    }
    diferencaDias-=dia;
    console.log("Faltam " + diferencaDias + " dias para o natal!");    
  }
}