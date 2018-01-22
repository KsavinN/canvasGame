var canvas = null;
var context = null;
var img= null;
var srcImgWidth = 1536;
var srcImgHeight = 256;
var frameCount = 6;
var height = srcImgHeight;
var width = srcImgWidth;


var currentFrame=0;

onImageLoad = function(){
  console.log('image load');
}


setup = function(){
  canvas=document.getElementById("my_canvas");
  context=canvas.getContext('2d');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  //make background
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle='black';
  context.fill();

  img = new Image();
  img.src="spritestrip.png";
  
  setInterval(animate,80); 
}
var distance = 0;
var animate = function(){
 context.clearRect(distance, 0, srcImgWidth/frameCount,srcImgHeight);
 distance = distance+30;
 if(distance>canvas.width) {
   distance = 0;
 }
 context.beginPath();
context.rect(0, 0, canvas.width, canvas.height);
 context.fillStyle='black';
 context.fill();
 context.drawImage(img, currentFrame*srcImgWidth/frameCount,0,srcImgWidth/frameCount,srcImgHeight, distance,0, srcImgWidth/frameCount,srcImgHeight);
 currentFrame=(currentFrame+1)%frameCount;
}




setup();