var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numeros = 0;
let contador = 0;


while(contador<1){

    for(let i = 0; i<lines.length; i++){

        if(lines[i].includes("caw caw")){
            console.log(numeros)
            numeros=0;
        }
        else if(lines[i].includes("--*")){
            numeros+=1;
        }
        else if(lines[i].includes("-*-")){
            numeros+=2;
        }
        else if(lines[i].includes("-**")){
            numeros+=3;
        }
        else if(lines[i].includes("*--")){
            numeros+=4;
        }
        else if(lines[i].includes("*-*")){
            numeros+=5;
        }
        else if(lines[i].includes("**-")){
            numeros+=6;
        }
        else if(lines[i].includes("***")){
            numeros+=7
        }

    }
    contador++
}