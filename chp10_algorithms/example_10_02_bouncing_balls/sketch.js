// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 10-2: Bouncing ball class

// Two ball variables
var ball1;
var ball2;

function setup() {
  createCanvas(480, 270);
  
  // Initialize balls
  ball1 = new Ball(64);
  ball2 = new Ball(32);
}

function draw() {
  background(255);
  
  // Move and display balls
  ball1.move();
  ball2.move();
  ball1.display();
  ball2.display();
}


