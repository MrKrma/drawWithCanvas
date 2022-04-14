// Attributes to capture HTML elements
var button = document.getElementById("send"); //obtain the button
var a  = document.getElementById("paint"); // obtain the canvas
var paint = a.getContext("2d"); //obtain the canvas context
button.addEventListener("click", drawCoordenated); // add an eventListener to the button
document.addEventListener("keydown", keyDarw);//to detect which key was pressed
// Attributes to create a point in the middel of the canvas
var x1= 150;
var y1 = 150;
var x2 = 150;
var y2 = 150;
//
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};
var control = 10; // Attribute to control de length of lines made with the arrows

// Draw borders of the canvas
drawLine("red", 1, 1, 1, 299, paint);
drawLine("red", 1, 299, 299, 299, paint);
drawLine("red", 299, 1, 299, 299, paint);
drawLine("red", 1, 1, 299, 1, paint);
drawLine("red", x1, y1, x2, y2, paint);//make a point in the middel of the canvas

/*
* drawCoordenated
* method that get data of the beginning and end points (x, y)
* and call drawLine()
*/
function drawCoordenated() {
  x1 = parseInt(document.getElementById("firstX").value);
  y1 = parseInt(document.getElementById("firstY").value);
  x2 = parseInt(document.getElementById("secondX").value);
  y2 = parseInt(document.getElementById("secondY").value);
  drawLine("red", x1, y1, x2, y2, paint);
  x1 = x2;
  y1 = y2;
}

/*
* kayDraw
* method that draw a short line depending of the key pressed
*/
function keyDarw(event) {
  switch (event.keyCode) {
    case teclas.LEFT:
      x2 -= control;
      drawLine("red", x1, y1, x2, y2, paint);
      x1 = x2;
    break;
    case teclas.UP:
      y2 -= control;
      drawLine("red", x1, y1, x2, y2, paint);
      y1 = y2;
    break;
    case teclas.RIGTH:
      x2 += control;
      drawLine("red", x1, y1, x2, y2, paint);
      x1 = x2;
    break;
    case teclas.DOWN:
      y2 += control;
      drawLine("red", x1, y1, x2, y2, paint);
      y1 = y2;
    break;
    default:
    break;
  }
}

/*
* drawLine
* method that drow a line in the canavas
* need the color, the beginning point (x,y) the end point (x,y) and the cavas
*/
function drawLine(color, x0, y0, x1, y1, canva) {
  canva.beginPath();
  canva.strokeStyle = color;
  canva.moveTo(x0, y0);
  canva.lineTo(x1, y1);
  canva.stroke();
  canva.closePath();
}
