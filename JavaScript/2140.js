var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const NOTAS = [2,5,10,20,50,100];
let diferenca;
while(true){
    let[n,m] = lines.shift().split(" ").map(Number);
    diferenca = m-n;
    if(n == 0 && m == 0){
        break;
    }
    if(diferenca>200 || diferenca<4){
        console.log("impossible");
    }
    else{
        let notasPossiveis, condicao;
        for(let i = 0; i<NOTAS.length; i++){
            for(let j = 0; j<NOTAS.length; j++){
                notasPossiveis = NOTAS[i]+NOTAS[j];
                condicao = diferenca == notasPossiveis;
                if(condicao){
                    console.log("possible");
                    break;
                }
            }
            if(condicao){
                break;
            }    
        }
    }
}
