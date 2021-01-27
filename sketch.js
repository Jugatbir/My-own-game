var spike, spriteImg
var bg, ground1, ground2
var PlayerImg, player
var Invisigrnd, Spikeinvisi
var coin
var playerStand

function preload(){
spikeImg = loadImage("Images/spike.png")
bg = loadImage("Images/back.jpg")
ground1 = loadImage("Images/Ground/grnd1.png")
ground2 = loadImage("Images/Ground/grnd2.png")
PlayerImg = loadAnimation("Images/Character/tile000.png","Images/Character/tile001.png",
"Images/Character/tile002.png","Images/Character/tile003.png","Images/Character/tile004.png",
"Images/Character/tile005.png")
coinAnime = loadAnimation("Images/Coin/tile000.png","Images/Coin/tile001.png",
"Images/Coin/tile002.png","Images/Coin/tile003.png","Images/Coin/tile004.png",
"Images/Coin/tile005.png")
playerStand = loadAnimation("Images/Character/boy stand.png",)
}

function setup() {
  createCanvas(displayWidth, displayHeight-143);

  scene = createSprite(displayWidth/2, displayHeight/2-75, displayWidth, displayHeight)
  scene.addImage(bg)
  scene.scale = 1.35

  spike = createSprite(displayWidth/2, displayHeight/2, 50, 50);
  spike.addImage(spikeImg)
  spike.scale = 0.3
  spike.velocityY = 3

  Invisigrnd = createSprite(displayWidth/2, displayHeight-200, displayWidth*2, 20)
  Invisigrnd.visible = false;

  Spikeinvisi = createSprite(displayWidth/2, displayHeight/2-200, displayWidth*2, 20)
  Spikeinvisi.visible = false;

  player = createSprite(displayWidth/4, displayHeight-300, 10, 10)
  player.addAnimation("Standing", playerStand)
  player.addAnimation("running", PlayerImg)
  player.setCollider("rectangle", 0 ,0 ,50,75)

  coin = createSprite(displayWidth-300, displayHeight/3 , 10, 10)
  coin.addAnimation("Spinning", coinAnime)
  coin.scale = 0.3

  Base1 = createSprite(displayWidth-300, displayHeight/2-30, 100, 20)
  Base1.addImage(ground1)
  Base1.scale = 0.7
  Base1.setCollider("Rectangle", 0, 0, 340,120)

  Base2 = createSprite(displayWidth/4, displayHeight/2, 100, 20)
  Base2.addImage(ground2)
  Base2.scale = 0.7
  Base2.setCollider("Rectangle", 0, -10, 260  ,160)
}

function draw() {
  background(255,255,255);

player.collide(Invisigrnd)
player.collide(Base1)
player.collide(Base2)

spike.bounceOff(Invisigrnd)
spike.bounceOff(Spikeinvisi)

if(keyDown(UP_ARROW)){
  player.velocityY = -12
  player.changeAnimation("running")
}  
if(keyDown(UP_ARROW)){
  player.y = player.y-20
  player.changeAnimation("running")
}
if(keyDown(LEFT_ARROW)){
  player.x = player.x-10
  player.changeAnimation("running")
}  

if(keyDown(RIGHT_ARROW)){
  player.x = player.x+10
  player.changeAnimation("running")
}  
player.changeAnimation("Standing")

player.velocityY = player.velocityY+0.8
  drawSprites();
}