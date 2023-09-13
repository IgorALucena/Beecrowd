var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let indicePar =0;
let indiceImpar = 0;
let par = [];
let impar = [];
for(let i = 0; i<15; i++){
    let n = Number(lines.shift());
    if(n%2 == 0){
        par[indicePar] = n;
        indicePar++
        if(indicePar == 5){
            for(let j = 0; j<5; j++){
                console.log("par["+j+"] = " + par[j])
            }
            indicePar=0;
            
        }
        
    }
    else{
        impar[indiceImpar] = n;
        indiceImpar++
        if(indiceImpar == 5){
            for(let j = 0; j<5; j++){
                console.log("impar["+j+"] = " + impar[j])
            }
            
            indiceImpar=0;
            
        }
        
    }
        
}
for(let j = 0; j<indiceImpar; j++){
    console.log("impar["+j+"] = " + impar[j])
}
for(let j = 0; j<indicePar; j++){
    console.log("par["+j+"] = " + par[j])
}
