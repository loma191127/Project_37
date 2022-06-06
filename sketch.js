var p,ep;
var Ep = [];
var gameState = 0;
var score;
function setup(){
 createCanvas(displayWidth+ 66,displayHeight-10);
 p = createSprite(10,703.25,20,20);
 p.shapeColor=rgb(random(0,255),random(0,255),random(0,255));
}
function draw(){
 background(rgb(0,0,0));
 if(gameState === 1){
  score = Math.round(frameCount/10);
 fill(rgb(255,255,255));
 textSize(32);
 text("Score: "+ score, 500,50);
 //p.x+=4;
 camera.position.x = p.position.x+500;
 if(keyIsDown(UP_ARROW) && p.position.y>10){
  p.position.y-=7;
 }
 if(keyIsDown(DOWN_ARROW) && p.position.y<703.25){
  p.position.y+=7;
 }
 spawnParticles();
 /*if(ep.position.x + p.position.x = ){
    gameState = 0;
 }*/}
 if (gameState === 0){
  score = 0;
  //Ep.destroyEach(); 
  gameState = 1;
  
 } 
 drawSprites();
}
function spawnParticles(){
 if(frameCount % 4 === 0){
  ep = createSprite(1500,500,random(10,50),random(10,50));
  ep.y = Math.round(random(00,700));
  ep.velocityX = -5;
  Ep.push(ep);
 }
}