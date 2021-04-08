var database;
var gameState=0;
var playerCount=0;
var form;
var game;
var player;
var allPlayers;
var distance=0
var cars,car1,car2,car3,car4
var passedFinish

var car1_img,car2_img,car3_img,car4_img,track_img,ground_img
var player1,player2,player3,player4

function preload(){
car1_img=loadImage("images/car1.png")
car2_img=loadImage("images/car2.png")
car3_img=loadImage("images/car3.png")
car4_img=loadImage("images/car4.png")
track_img=loadImage("images/track.png")
ground_img=loadImage("images/ground.png")

}


function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20,displayHeight-30);
  game=new Game();
  game.getState()
  game.start()
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  } 
  if(gameState===2){
    game.end()
  } 
  
}

