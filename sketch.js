let backgroundImg = [];
let backgroundIndex = 0;

let layeringImg = [];
let layeringIndex = 0;

let sx;
let sy;
let sw;
let sh;

let dx;
let dy;
let dw;
let dh;

let slider1;
let slider2;

let button
let savePic

var Lwidth;
var Lheight;
let randImg;

let randImg2;

var px = 3.57142857143;

const urlParams = new URLSearchParams(location.search);



function getQueryStringValue (key) {  
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  

function setup() {

  var cnv = createCanvas(840, 840);

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  cnv.position(x, y+140);

  let q = 0;
  for (const key of urlParams.keys()) {
    if(q == 0)
    {
      img = loadImage("clothes2/" + key + ".png");

    }
    q = 1;

      
    }






  layer1 = createGraphics(img.width, img.height);
  slider1 = createSlider(100, 3000, 100);
  slider1.position(400, 45);
  slider1.style('width', '80px');
  
  slider2 = createSlider(100,3000, 100);
  slider2.position(400, 20);
  slider2.style('width', '80px');

  button = createImg('save.png');
  button.position(260, 20);
  button.mousePressed(saveCanvas);


}

function resetSketch (){
  layer1 = createGraphics(img.width, img.height);
}


  function preload() {  
    


    for (const key of urlParams.keys()) {


    backgroundImg.push(loadImage("clothes2/" + key + ".png"));
    layeringImg.push(loadImage("clothes2/" + key + ".png"));


      
    }
    
  }


  

  function mousePressed() {


    let Lheight = img.height/px;
    let Lwidth = img.width/px;

    resetSketch();
    background(255);


    let randImg = random(backgroundImg);
    image(randImg, 0, 0, Lwidth, Lheight);

    for (let i = 0; i < layeringImg.length; i++) {


    sx = int(random(0, Lwidth));
    sy = int(random(0, Lheight));
    sw = int(random(0, 500));
    sh = int(random(0, 500));

    dx = sx
    dy = sy
    dw = sw
    dh = sh


      let randImg2 = random(layeringImg);

      randImg2.resize(Lwidth, Lheight);

      image(randImg2, sx, sy, sw, sh, dx, dy, dw, dh);
    }


  }
  
  
