var k, x, rete, sub, max;
x = prompt("inserisci l'ip della rete 0");
if(x === undefined || x == "" || x===null ){k = ["192", "168", "1"]; rete = 0;}
else{k = x.split(".");rete = Number(k[k.length-1]);k.pop();}
sub = [252,248,240,224,192,128];
max = [4,8,16,32,64,128];
//ip disponibili 8, 16, 32, 64, 128
function ok(e){
  if(e == 1){
  document.querySelector(".bb").style.display = "flex";}
  else{
    document.querySelector(".bb").style.display = "none";
  }
}
function kilo() {
  var nrete = document.querySelector("#nome").value;
  var nhost = Number(document.querySelector("#host").value) + 3;
  if(nhost <= 128 && rete < 255){
  var padre = document.querySelector("table");
  var figlio = document.createElement("tr");
  console.log(figlio);
  var kx, pp, emp, gg;
  //nome
  kx = CreaItm(nrete);
  figlio.appendChild(kx);
  //ip rete
  gg = k+","+rete;
  gg = gg.replace(/,/gi, ".");
  kx = CreaItm(gg);
  figlio.appendChild(kx);
  //max ip
  emp = ritorna(nhost);
  pp = max[emp];
  console.log(pp);
  kx = CreaItm(pp);
  figlio.appendChild(kx);
  //Gateway
  pp = max[emp]+rete-2;
  gg = k+","+pp;
  gg = gg.replace(/,/gi, ".");
  kx = CreaItm(gg);
  figlio.appendChild(kx);
  padre.appendChild(figlio);
  //Subnet
  pp = sub[emp];
  kx = CreaItm("255.255.255."+pp);
  figlio.appendChild(kx);
  //Broadcast
  pp = max[emp]+rete-1;
  gg = k+","+pp;
  gg = gg.replace(/,/gi, ".");
  kx = CreaItm(gg);
  figlio.appendChild(kx);
  padre.appendChild(figlio);
  //update rete
  rete = max[emp]+rete;
  document.querySelector(".bb").style.display = "none";
  }
  else {
    alert("RETI TROPPO PESANTI");
  }
}
function CreaItm(testo){
  var jj = document.createElement("td");
  var txt = document.createTextNode(testo);
  jj.appendChild(txt);
  return jj;
}
function ritorna(p){
  var lo;
  for (var i = 0; i < max.length; i++){
    if(p <= max[i]){
      lo = i;
      break;
    }
  }
  return lo;
}
