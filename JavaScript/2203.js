var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length>1){
        let [xF,yF,xI,yI,vI,r1,r2] = lines.shift().trim().split(" ").map(Number);
        const ULTIMATE = 1.5;
        let resultado = (Math.sqrt((((xI-xF)**2) + ((yI-yF)**2)))+ULTIMATE*vI)-r1;
        let sN = resultado<=r2 ? "Y":"N";
        console.log(sN);   
}