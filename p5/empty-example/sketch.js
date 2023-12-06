


//Following variables control the Y position of the character's limbs throughout the animation.
var HeadY = 250;
var BodyY = 300;
var ArmY = 300;
var LegY = 400;

//Following variables control the minimum and maximum Height the figure can go
var MinimumHeight = 400
var MaxHeight = 50



function setup() {
  createCanvas(500,500);  //Creates the canvas size
  
}

function draw() {
  background('gray');
  
  if (mouseIsPressed) {   
    fill("#E30808"); //Changes color to indicate the character is moving
     
     //The following code makes it so that the character moves upward during the click up to the MaxHeight value
    if (HeadY > MaxHeight){
      HeadY = HeadY - 1; 
      BodyY = BodyY - 1;
      ArmY = ArmY - 1;
      LegY = LegY - 1;
    }

  } else {
    fill("#FFFFFF"); //Resets color to white when mouse is let go

    //The following code makes it so that the character falls back down when the mouse is let go
    if (LegY < MinimumHeight){
      HeadY = HeadY + 10; 
      BodyY = BodyY + 10;
      ArmY = ArmY + 10;
      LegY = LegY + 10;
    }

}
  ellipse(250,HeadY,80,80); //Head of the character
  rect(227,BodyY,50,90);    //Body of the character
  rect(202,ArmY,20,70);     //Left arm of the character
  rect(282,ArmY,20,70);     //Right arm of the character
  rect(227,LegY,20,70);     //Left leg of the character
  rect(257,LegY,20,70);     //Right leg of the character
  textSize(40);             //Fly Text
  textFont("Arial");
  textAlign(CENTER);
  text("FLY!",100,50);
  text("FLY!",400,50);


}

