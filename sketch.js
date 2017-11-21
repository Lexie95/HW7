var capture;

function setup() {
  
createCanvas(640, 480);
capture = createCapture(VIDEO);
capture.size(640, 480);
capture.hide();

}


function draw() {

var myImage = capture.loadPixels();
image(myImage, 0, 0, 640, 480);

background(255,0,0);

for(var x=0; x<640; x+=3){
   
   for(var y = 0; y<480; y+=3){
     
     var mv = myImage.get(x+random(5,50),y+random(5,50));
       
     var value = brightness(mv)
     fill(random(mv),random(mv),random(mv));
     noStroke();
     //rect(x,y,value/15,value/15)
     textSize(20);
     text("+",x,y);
   }
}

}