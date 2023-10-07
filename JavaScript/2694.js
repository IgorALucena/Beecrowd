var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdeLinhas = lines.shift();
let soma;

for (let numeroLinha = 0; numeroLinha < qtdeLinhas; numeroLinha++) {
    let linha = lines.shift();
    soma = processarLinha(linha);
    console.log(soma);
}

function processarLinha(texto){
    let textoNumero = "";
    let caractere;

    let numero1 = 0, numero2 = 0, numero3 = 0  
    let numero1Preenchido = false, numero2Preenchido = false, numero3Preenchido = false; //flags para identificar que os números já foram identificados
    
    for(let indice = 0; indice < texto.length; indice++) {
    
        caractere = texto.charAt(indice); 
        
        if (!numero1Preenchido) { 
            if (ehNumero(caractere)){
                textoNumero += caractere; 
            } else if (textoNumero != ""){  
                numero1 = Number(textoNumero)
                textoNumero = "";
                numero1Preenchido = true; 
            }
        } else if (!numero2Preenchido) {
            if (ehNumero(caractere)){
                textoNumero += caractere;
            } else if (textoNumero != ""){
                numero2 = Number(textoNumero);
                textoNumero = "";
                numero2Preenchido = true;
            }
        } else if (!numero3Preenchido) {
            if (ehNumero(caractere)){
                textoNumero += caractere;
            } else if (textoNumero != ""){
                numero3 = Number(textoNumero);
                textoNumero = "";
                numero3Preenchido = true;
            }
        }
    }
    if (textoNumero != "") {
        numero3 = Number(textoNumero);
    }

    return (numero1 + numero2 + numero3);
}


function ehNumero(caractere) {
    let codCaractere = caractere.charCodeAt()
 
    if (codCaractere >= 48 && codCaractere <= 57){ 
        return true
    } 
    return false
}