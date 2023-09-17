let n = lines.shift(); 
let x = lines.shift().split(" ").map(Number);
let contador = [];
let restantes = 0;
let invasoes = 0;
let i = 0;

while(true){
    if(x[i]%2==0 && i==0){
        contador[i] = 1;
        if(x[i]>0){
            x[i]--;
            
        }
        break;
    }
    else if(x[i]%2==1 && i==(n-1)){
        contador[i] = 1;
        if(x[i]>0){
            x[i]-- ;  
        }
        break;
    }
    else if(x[i]%2==1){
        if(x[i]>0){
            x[i]--;
            contador[i] = 1;
            i++;
        }
    }
    else if(x[i]%2 ==0){
        contador[i] = 1;
        if(x[i]>0){
            x[i]--;
            i--;
        }
    }

}
for (let j = 0; j < x.length; j++) {
    restantes += x[j];
    
}
for(let j = 0; j<contador.length; j++){
    invasoes += contador[j];
}
console.log(invasoes+" "+ restantes);
