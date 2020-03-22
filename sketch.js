


function setup() {
  createCanvas(500, 400);

  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();

    }

function draw() {
  background("blue")
  
  bubble1.color="green";
  bubble2.color="red";
  bubble3.color="yellow";
  
  bubble1.move();
  bubble2.move();
  bubble3.move();
  
  bubble1.display();
  bubble2.display();
  bubble3.display();
}