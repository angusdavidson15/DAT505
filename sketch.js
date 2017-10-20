//require('./server.js');
var capture;

/*
function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
}

function draw() {
}
*/

function setup() {	   
    createCanvas(1280, 720); //Set size of the canvas
    capture = createCapture(VIDEO);
    capture.size(320,240);
    //bg=loadImage("background.jpg");
    //button = createButton('Camera'); button.position(width/2,100);
    //button = createButton('Help'); button.position(width/2,200);
    //button = createButton('Exit'); button.position(width/2,300);

    //img("https://c1.staticflickr.com/5/4455/23882061018_d96964f091_b.jpg");
    /* // Pick colors randomly on setup
  	r = random(255); g = random(255); b = random(255);    
    */
}

function draw() {
	background(0);
    //image(img,0,0);
    image(capture,0,0,1280,720);
    filter('INVERT');
}

function mousePressed() {
    if(mousePressed==true){
        program=1;
    }
  	
}






