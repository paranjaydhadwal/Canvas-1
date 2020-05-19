var position=[];
var drawing=[];
function setup() {
  createCanvas(800,400);

}

function draw() {
  background(0); 
  beginShape();
  for(var i=0; i<drawing.length;i++){
    noFill();
    stroke("red");
    strokeWeight(5);
    vertex(drawing[i][0],drawing[i][1]);
    endShape();
  }
 
}
function mouseDragged(){
  position=[mouseX,mouseY];
  drawing.push(position);
  console.log(drawing);
}