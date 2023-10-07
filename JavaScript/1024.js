var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for(let i = 1; i <= lines[0]; i++){

    let palavra = lines[i]

    let mensagemCrifrada = []
    
    mensagemCrifrada = primeiraPassada(palavra)
   
    mensagem = inverter(mensagemCrifrada)
    mensagemCrifrada = terceiraPassada(mensagemCrifrada)
    imprimirMensagemCifrada(mensagemCrifrada)
}

function imprimirMensagemCifrada(mensagemCrifrada){
    let txtCifrado = ""
    for(let i = 0; i < mensagemCrifrada.length; i++){
        txtCifrado += mensagemCrifrada[i]
    }

    console.log(txtCifrado)
}

function terceiraPassada(mensagemCrifrada){
   
    let metade = parseInt(mensagemCrifrada.length / 2)
    
    for(let i = metade; i < mensagemCrifrada.length; i++){

        let codAscii = mensagemCrifrada[i].charCodeAt()

        mensagemCrifrada[i] = String.fromCharCode( codAscii - 1)
    }

    return mensagemCrifrada
}

function inverter(vetor) {
    let aux 
    let metade = (vetor.length / 2)
    let metadeInteiro = parseInt(metade)
    let limite 

    limite = (metade == metadeInteiro) ? metade : metadeInteiro
    limite--

    for(let i = 0, j = (vetor.length - 1); i < metade; i++, j--){
        aux = vetor[i]
        vetor[i] = vetor[j]
        vetor[j] = aux
    }

    return vetor
}

function ehLetra(codAscii) {
    if ((codAscii >= 65 && codAscii <= 90) || (codAscii >= 97 && codAscii <= 122)){
        return true
    } else {
        return false
    }
}

function primeiraPassada(palavra){
    let codAscii
    let mensagemCrifrada = []

    for(let i = 0; i < palavra.length; i++){
        
        codAscii = palavra.charCodeAt(i) 
    
        if (ehLetra(codAscii)){
            mensagemCrifrada[i] = String.fromCharCode( codAscii + 3) 
        } else {
            mensagemCrifrada[i] = palavra[i]
        }
    }    

    return mensagemCrifrada
}