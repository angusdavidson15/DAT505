import processing.video.*; //module for sensor (webcam)
import controlP5.*;
ControlP5 cp5;
Capture cam;

PImage backgroundimg;
PFont fontMain;
color rectHighlight;
int program = 0;
int displayWidth = 1280;
int displayHeight = 720;

int centerX = (displayWidth / 2);
int centerY = (displayHeight / 2);


void setup() {
 size(1280, 720); //resolution of GUI and Logitech webcame 
 //String[] cameras = Capture.list();
 //cam = new Capture(this, cameras[0]);

 /*if (cameras.length == 0) {
  println("There are no cameras available for capture.");
  exit();
 } else {
  println("Available cameras:");
  for (int i = 0; i < cameras.length; i++) {
   println(cameras[i]);
  }

  // The camera can be initialized directly using an 
  // element from the array returned by list():
  cam = new Capture(this, cameras[0]);
  cam.start();
 }
 
 */


 rectMode(CENTER);
 textMode(CENTER);
 backgroundimg = loadImage("background.png");
 fontMain = loadFont("ARDESTINE-48.vlw");
}

void draw() {
 image(backgroundimg, 0, 0);
 mainMenu();

 if (keyPressed == true && key == 'c') {
  cameraPage();
 }






}


void buttons() {
 cp5 = new ControlP5(this);
 cp5.addButton("Camera").setValue(0).setPosition(centerX-100,centerY-100).setSize(200,50);
 cp5.addButton("Other").setValue(1).setPosition(centerX-100,centerY-25).setSize(200,50);
 cp5.addButton("Help").setValue(2).setPosition(centerX-100,centerY+50).setSize(200,50);
 cp5.addButton("Exit").setValue(3).setPosition(centerX-100,centerY+125).setSize(200,50);
 //rectHighlight = color(255,0,0);
 //rect(centerX, centerY - 70, 200, 50); //x axis, y axis, width, height  
 //rect(centerX, centerY - 10, 200, 50); //x axis, y axis, width, height
 //rect(centerX, centerY + 50, 200, 50); //x axis, y axis, width, height
 //rect(centerX, centerY + 110, 200, 50); //x axis, y axis, width, height
}

void mousePressed() {

}

void Camera(){
 println("Camera pressed"); 
}

void cameraPage() {
 image(backgroundimg, 0, 0);

 if (cam.available() == true) {
  cam.read();
  image(cam, centerX, centerY);
  println("Camera reading");
 }

}

void mainMenu() {
 image(backgroundimg, 0, 0);
 buttons();
 textFont(fontMain, 30);
 fill(255);
 textSize(80);
 text("Davidson Detection", centerX - 330, 200);
 textSize(30);
 fill(0);
 //text("Camera", centerX - 50, centerY - 60);
 //text("Other", centerX - 35, centerY);
 //text("Help", centerX - 25, centerY + 60);
 //text("Exit", centerX - 25, centerY + 120);
 fill(255, 0, 0);
 if (keyPressed == true && key == 5) {
  cam.start();
 }

}