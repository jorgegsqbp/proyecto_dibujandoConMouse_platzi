//PROYECTO DE DIBUJO CON MOUSE
//VARIABLES
var pizarra = document.getElementById("pizarra");
var piz = pizarra.getContext("2d");
var pizW = pizarra.width;
var pizH = pizarra.height;
var col="red"
var gro = 3
var decision = "false"
var mousePosicion = {
  posXi: 0,
  posYi: 0,
  posXf: 0,
  posYf: 0,
  isDown: decision
}
console.log(pizW, pizH)

function Linea(xi,yi,xf,yf,co,grosor){
  piz.beginPath();
  piz.moveTo(xi,yi);
  piz.lineTo(xf,yf);
  piz.strokeStyle = co;
  piz.stroke();
  piz.lineWidth = grosor;
  piz.closePath();
}

Linea(0,0,pizW,0,col,gro);
Linea(pizW,0,pizW,pizH,col,gro);
Linea(pizW,pizH,0,pizH,col,gro);
Linea(0,pizH,0,0,col,gro);

document.getElementById("pizarra").addEventListener("mousedown",mouseDown);
document.getElementById("pizarra").addEventListener("mousemove",mouseMove);
document.getElementById("pizarra").addEventListener("mouseup",mouseUp);

function mouseUp(evento){

decision = "false";

mousePosicion.posXf = evento.layerY;
mousePosicion.posYf = evento.layerY;
cox.splice(0,1)
coy.splice(0,1)
}
var cox = [0]
var coy = [1]
function mouseMove(evento){
if (decision == "true"){
  mousePosicion.posXf = evento.layerX;
  mousePosicion.posYf = evento.layerY;
  cox.push(evento.layerX);
  coy.push(evento.layerY);
  if(cox.length > 2){
    cox.splice(0,1);
    coy.splice(0,1);
  }


  Linea(cox[cox.length-2],coy[coy.length-2],cox[cox.length-1],coy[coy.length-1] ,"red",5);
  Linea(cox[cox.length-2],coy[coy.length-2],cox[cox.length-1]+2,coy[coy.length-1]+2 ,"red",5);
  Linea(cox[cox.length-2],coy[coy.length-2],cox[cox.length-1]-2,coy[coy.length-1]-2 ,"red",5);
  mousePosicion.posXi = 0
  mousePosicion.posXf = 0
  mousePosicion.posXf = 0
  mousePosicion.posYf = 0
}

}

function mouseDown(evento){


  mousePosicion.posXi = evento.layerX;
  mousePosicion.posYi = evento.layerY;
  cox[0]=evento.layerX;
  coy[0]=evento.layerY;
  decision = "true"
  if (decision == "true"){
  Linea(mousePosicion.posXi,mousePosicion.posYi,mousePosicion.posXi-1,mousePosicion.posYi-1 ,"red",5)
  Linea(mousePosicion.posXi,mousePosicion.posYi,mousePosicion.posXi+1,mousePosicion.posYi+1,"red",5);
  Linea(mousePosicion.posXi,mousePosicion.posYi,mousePosicion.posXi-1,mousePosicion.posYi+1 ,"red",5)
  Linea(mousePosicion.posXi,mousePosicion.posYi,mousePosicion.posXi+1,mousePosicion.posYi-1,"red",5);
}

}
