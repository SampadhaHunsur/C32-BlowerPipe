var ball;
var button



function setup() {
  createCanvas(800,400);
  ball = new Ball(width/2, 200, width, 20);
  button = createButton("Click to Blow");
  button.position(width/2, height-100)
  button.class("blowButton")
  button.mousePressed(blow)


}

function draw() {
  background(255,255,255);  
  ball.display();

	Engine.run(engine);
  
  drawSprites();
} 

function blow(){
  Matter.Body.ApplyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
}
