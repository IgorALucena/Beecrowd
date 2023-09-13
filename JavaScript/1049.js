/*
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n1 = lines.shift();
var n2 = lines.shift();
var n3 = lines.shift();

if(n1 == "vertebrado"){
    if(n2 == "ave"){
        if(n3 == "carnivoro"){
            console.log("aguia")
        }
        else{
            console.log("pomba")
        }

    }
    else{

        if(n3 == "onivoro"){
            console.log("homem");
        }
        else{
            console.log("vaca");
        }


    }

}
else{
    if(n2 == "inseto"){
        if(n3 == "hematofago"){
            console.log("pulga");
        }
        else{
            console.log("lagarta");
        }
    }
    else{
        if(n3 == "hematofago"){
            console.log("sanguessuga");
        }
        else{
            console.log("minhoca");
        }
    }
}