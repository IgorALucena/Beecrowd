var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14;

while(true){
    let v = Number(lines.shift());
    let d = Number(lines.shift());
    if(isNaN(d) || isNaN(v)){
        break;
    }
    else{
        let r = d/2;
        let area = PI*(r*r);
        let altura = v/(PI*(r*r));
        console.log("ALTURA = " + altura.toFixed(2));
        console.log("AREA = " + area.toFixed(2));
    }

}