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

let t;
let k;

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



  let q = 0;
  for (const key of urlParams.keys()) {
    if(q == 0)
    {
      img = loadImage("clothes2/" + key + ".png");

    }
    q = 1;

      
    }

  var cnv = createCanvas(840, 560);

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

  cnv.position(x, y+20);





    t=img.width/px
    k=img.height/px


  layer1 = createGraphics(img.width, img.height);
  slider1 = createSlider(50, 560, 100);
  slider1.position(40, 350);
  slider1.style('width', '120px');

  slider2 = createSlider(50,560, 100);
  slider2.position(40, 395);
  slider2.style('width', '120px');

  button = createImg('save.png');
  button.position(70, 455);
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
    sw = int(random(0, slider1.value()));
    sh = int(random(0, slider2.value()));

    dx = sx
    dy = sy
    dw = sw
    dh = sh


      let randImg2 = random(layeringImg);

      randImg2.resize(Lwidth, Lheight);

      image(randImg2, sx, sy, sw, sh, dx, dy, dw, dh);
    }


  }
  
  
