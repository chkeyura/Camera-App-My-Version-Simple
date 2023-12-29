function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw() {
  image(video,140,90,340,230)
  stroke("black");
  fill("red");
  circle(40,40,60);
  stroke("black");
  fill("red");
  circle(560,40,60);
  stroke("black");
  fill("red");
  circle(560,360,60);
  stroke("black");
  fill("red");
  circle(40,360,60);
  stroke("black");
  fill("blue");
  rect(70,30,460,20);
  stroke("black");
  fill("blue");
  rect(70,350,460,20);
  stroke("black");
  fill("blue");
  rect(30,70,20,260);
  stroke("black");
  fill("blue");
  rect(550,70,20,260);
  }
  
  function take_snapshot(){
    save("snapshot.jpg");
  }