var box1, box2;

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,200,50,25,10, 5);
  box2 = new Box(300,100,100,50,5, -4);

}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box1.bounce();

  box2.show();
  box2.move();
  box2.bounce();
}

