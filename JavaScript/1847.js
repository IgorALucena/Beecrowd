var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c] = lines.shift().split(" ").map(Number)

if(b<a && c>=b){
    console.log(":)");
}
else if(b>a && c<=b){
    console.log(":(");
}
else if((b>a && c>b) && (Math.abs(b-c)<Math.abs(a-b))){
    console.log(":(");
}
else if((b>a && c>b) && (Math.abs(b-c)>=Math.abs(a-b))){
    console.log(":)");
}
else if((a>b && b>c) && (Math.abs(b-c)<Math.abs(a-b))){
    console.log(":)");
}
else if((a>b && b>c) && (Math.abs(b-c)<=Math.abs(a-b))){
    console.log(":(");
}
else if(a==b){
    if(c>b){
        console.log(":)");
    }
    else{
        console.log(":(");
    }

}
else{
    console.log(":(");
}