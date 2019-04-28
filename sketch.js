
var inside;
var middle;
var outside;

function setup() {
  createCanvas(400, 200);
  noStroke();
  background(255, 255, 255);

  // inside = color(204, 102, 0);
  // middle = color(204, 153, 0);
  // outside = color(153, 51, 0);

  // These statements are equivalent to the statements above.
  // Programmers may use the format they prefer.
  //var inside = color('#CC6600');
  //var middle = color('#CC9900');
  //var outside = color('#993300');

  // fill(255);
}
var mouseX_before = false;
var mouseY_before = false;

function draw(){


  if (mouseIsPressed) {
    if (mouseX_before === false){
      mouseX_before = mouseX
      mouseY_before = mouseY
    }
    stroke(0);
  }

  line(mouseX_before, mouseY_before, mouseX, mouseY);

  mouseX_before = mouseX
  mouseY_before = mouseY
  
}
