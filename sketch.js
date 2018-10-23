var myImage;
var occhio_sx;
var occhio_dx;
var trumpet;
var song;


function preload() {
  myImage = loadImage('./assets/Armstrong.png')
  occhio_sx = loadImage('./assets/Armstrong_Eye.png');
  occhio_dx = loadImage('./assets/Armstrong_Eye.png');;
  trumpet = loadImage('./assets/Armstrong_Trumpet.png')

  song = loadSound('./assets/Sound.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.setVolume(0.5);
  fft = new p5.FFT();
  song.play();
}

function draw() {


  var spectrum = fft.analyze();
  var s = map(spectrum[256], 0, 1024, 15, 200);
  var p = map(spectrum[256], 50, 500, 1, 40);


  image(myImage, 0, 0, myImage.width / 1.5, myImage.height / 1.5);
  image(occhio_dx, 860 + 1.3*p, 220 - p, 24, 24);
  image(occhio_sx, 975 - 1.3*p, 199 - p, 24, 24);

  push();
  imageMode(CENTER);
  image(trumpet, 155, 360, 17.9 * 0.6 * s, 30 * 0.6 * s);
  pop();

  textSize(100);
  textFont('Limelight');
  fill('black')
  text("Let's Jazz", 300, 100);


  textSize(35);
  textFont('Nanum Pen Script');
  fill('#727272')
  text("with an absolutely-not-on-drugs Louis", 310,  130);





}
