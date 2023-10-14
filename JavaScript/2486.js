var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    let soma = 0;
    let t = Number(lines.shift());
    if(t <= 0){
      break;
    }
    else {
      for(let i = 0; i < t; i++){
        let [a, b] = lines.shift().trim().split(" ");
        a = Number(a);
        switch (b){
          case "suco":
            soma += (a * 120);
            break;
          case "morango":
            soma += (a * 85);
            break;
          case "mamao":
            soma += (a * 85);
            break;
          case "goiaba":
            soma += (a * 70);
            break;
          case "manga":
            soma += (a * 56);
            break;
          case "laranja":
            soma += (a * 50);
            break;
          case "brocolis":
            soma += (a * 34);
            break;
        }
      }
    }
    if(soma < 110){
      console.log("Mais " + (110 - soma) + " mg");
    }
    else if(soma >= 110 && soma <= 130){
      console.log(soma + " mg");
    }
    else{
      console.log("Menos " + ((130 - soma) * -1) + " mg");
    }
  }
  