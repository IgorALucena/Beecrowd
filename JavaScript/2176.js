var lines = input.split('\n');

let s = lines.shift().trim().split("").map(Number);
let contador = 0;
for(let i = 0; i<s.length; i++){
    if(s[i] == 1){
        contador++;
    }
}
if(contador%2 == 0){
    console.log(s.join("")+0);
}
else{
    console.log(s.join("")+1);
}