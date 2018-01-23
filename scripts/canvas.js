
 var canvas=document.getElementById("my_canvas");
 var context=canvas.getContext('2d');
 var vectorBall = {
   x:-10,
   y:10,
 }

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  var restart = false;

    




var  doKeyDown = function(e) {
    var key = e.keyCode;
    if(key==38){
      movePlayer_1(player1.positionY-20);
      
    }
    if(key==87){
      movePlayer_2(player2.positionY-20);
    }
    if(key==83) {
      movePlayer_2(player2.positionY+20)
    }
    if(key==40){
      movePlayer_1(player1.positionY+20);
      
    }
    console.log(e.keyCode);
    }

var drawRectangle = function(context,positionX,positionY) {
 context.fillStyle='white';
 context.fillRect(positionX,positionY,20,200);
}

var movePlayer_1 = function(positionY){
  if(positionY<=50 || positionY>canvas.height/1.4){

  }else{
    context.clearRect(player1.positionX,player1.positionY, 20, 200);
    player1.positionY = positionY;
    drawRectangle(context,player1.positionX,player1.positionY);
  }
}

var movePlayer_2 = function(positionY){
  if(positionY<=50 || positionY>canvas.height/1.4){

  }else{
    context.clearRect(player2.positionX-1,player2.positionY, 30, 200);
    player2.positionY = positionY;
    drawRectangle(context,player2.positionX,player2.positionY);
  }
}

var player1 = { 
  positionX:0,
  positionY:canvas.height/2.5,
  points:0
};

var player2 = {
  positionX:canvas.width/1.03,
  positionY:canvas.height/2.5,
  points:0
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
 if(restart){
  setTimeout(function(){
    restart=false;
  },800)
 } else {
  context.clearRect(ball.positionX-10,ball.positionY-10,21,21);
  ball.positionX=ball.positionX+vectorBall.x;
  ball.positionY=ball.positionY+vectorBall.y;
  if(ball.positionX<=10){
    player1.points=player1.points+1;
    gotPoints();
   }
  if(ball.positionX>=canvas.width/1.03){
    player2.points=player2.points+1;
    gotPoints();
  }
  if(ball.positionY<=65) {
    vectorBall.y=10;
  }
  if(ball.positionY>=canvas.height/1.119){
    vectorBall.y=-10;
  }
  checkImpact();
  drawBall(ball.positionX,ball.positionY);
 }  
}

var drawText = function(text,positionX) {
  context.clearRect(positionX,0,40,40);
  context.font = '45px Arial White'
  context.fillText(text, positionX, 40);
}

var makeTableGame = function(){
 context.fillStyle='white';
 context.fillRect(0,50,canvas.width,2);
 context.fillRect(0,canvas.height/1.1,canvas.width,3);
}

var checkImpact = function() {
  if(ball.positionX<=40){
    if(ball.positionY>=player1.positionY && ball.positionY<=player1.positionY+200){
      vectorBall.x=(vectorBall.x*-1);
      setTimeout(function(){drawRectangle(context,player1.positionX,player1.positionY)},10);
    }
  }
  if(ball.positionX>=canvas.width/1.044) {
    if(ball.positionY>=player2.positionY && ball.positionY<=player2.positionY+200) {
      vectorBall.x=(vectorBall.x*-1);
      setTimeout(function(){drawRectangle(context,player2.positionX,player2.positionY)},10);
    }
  }
}

var gotPoints = function() {
  ball.positionX = canvas.width/2;
  ball.positionY = canvas.height/2;
  drawText(player1.points,canvas.width/1.9);
  drawText(player2.points,canvas.width/2.1);
  restart = true;
}

var setupGame = function(){
  drawRectangle(context,player1.positionX,player1.positionY);
  drawRectangle(context,player2.positionX,player2.positionY);
  drawBall(ball.positionX,ball.positionY);
  makeTableGame();
  drawText(player1.points,canvas.width/1.9);
  drawText(player2.points,canvas.width/2.1);
  window.addEventListener('keydown',doKeyDown,true);
  setInterval(moveBall,25);
}




setupGame();


