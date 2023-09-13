/*
Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:

Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

var DDD = [{ddd: "61", destination: "Brasilia"},
{ddd: "71", destination: "Salvador"},
{ddd: "11", destination: "Sao Paulo"},
{ddd: "21", destination: "Rio de Janeiro"},
{ddd: "32", destination: "Juiz de Fora"},
{ddd: "19", destination: "Campinas"},
{ddd: "27", destination: "Vitoria"},
{ddd: "31", destination: "Brasilia"}];
let resultado;
for(let d of DDD){
    if(n == d.ddd){
        resultado = d.destination;
    }
}
if(resultado != null){
    console.log(resultado);
}
else{
    console.log("DDD nao cadastrado");
}