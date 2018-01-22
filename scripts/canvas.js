
 var canvas=document.getElementById("my_canvas");
 var context=canvas.getContext('2d');
 var vectorBall = {
   x:-10,
   y:10,
 }

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

var  doKeyDown = function(e) {
    var key = e.keyCode;
    if(key==87 || key==38){
      moveRectangle(player1.positionY-20);
      
    }
    if(key==83 || key==40){
      moveRectangle(player1.positionY+20);
      
    }
    console.log(e.keyCode);
    }

var drawRectangle = function(context,positionX,positionY) {
 context.fillStyle='white';
 context.fillRect(positionX,positionY,20,200);
}

var moveRectangle = function(positionY){
  if(positionY<=0 || positionY>canvas.height/1.3){

  }else{
    context.clearRect(player1.positionX,player1.positionY, 20, 200);
    player1.positionY = positionY;
    drawRectangle(context,player1.positionX,player1.positionY);
  }
}

var player1 = { 
  positionX:0,
  positionY:canvas.height/2.5
};

var player2 = {
  positionX:canvas.width/1.03,
  positionY:canvas.height/2.5
}

var ball = {
  positionX:canvas.width/2,
  positionY:canvas.height/2
}

var drawBall = function(positionX,positionY){
  var circle = new Path2D();
  circle.arc(positionX, positionY, 10, 0, 2 * Math.PI);
  context.fillStyle="white";
  context.fill(circle);
}

var moveBall = function(){
  context.clearRect(ball.positionX-10,ball.positionY-10,21,21);
  ball.positionX=ball.positionX+vectorBall.x;
  ball.positionY=ball.positionY+vectorBall.y;
  if(ball.positionX<=0){
    vectorBall.x = 10;
   }
  if(ball.positionX>=canvas.width/1.03){
    vectorBall.x= - 10;
  }
  if(ball.positionY<=0) {
    vectorBall.y=10;
  }
  if(ball.positionY>=canvas.height/1.03){
    vectorBall.y=-10;
  }
  checkImpact();
  drawBall(ball.positionX,ball.positionY);
}


var makeTableGame = function(){
 context.fillStyle='white';
 context.fillRect(0,50,canvas.width,2);
}

var checkImpact = function() {
  if(ball.positionX<=20){
    if(ball.positionY>=player1.positionY && ball.positionY<=player1.positionY+200){
      
      vectorBall.x=(vectorBall.x*-1)+50;
      setTimeout(function(){drawRectangle(context,player1.positionX,player1.positionY)},10);
      setTimeout(function(){drawRectangle(context,player1.positionX,player1.positionY)},20);
      setTimeout(function(){drawRectangle(context,player1.positionX,player1.positionY)},30);
      setTimeout(function(){drawRectangle(context,player1.positionX,player1.positionY)},40);
      setTimeout(function(){drawRectangle(context,player1.positionX,player1.positionY)},50);
      setTimeout(function(){drawRectangle(context,player1.positionX,player1.positionY)},60);
    }
  }
}

drawRectangle(context,player1.positionX,player1.positionY);
drawRectangle(context,player2.positionX,player2.positionY);
window.addEventListener('keydown',doKeyDown,true);
drawBall(ball.positionX,ball.positionY);
makeTableGame();
//setInterval(moveBall,25);