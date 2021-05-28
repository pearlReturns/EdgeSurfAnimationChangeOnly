var surfer1, surferImg, octopus, octopusImg,lol,rock2Img, islandRand;
var water, waterImg, fort,island, islandImg,fishImg,pearl,oysterImg,castleDoor;;
var rock, rockImg, coin, coinImg, b1,b1img,island1Img, island2Img, island3Img;
var rockGroup, islandGroup, coinGroup, octopusGroup, fortGroup,rock1Img,lighthouseImg;
var gameState = PLAY 
var PLAY = 1;
var END = 0;
var score;
var soundJump,bottle1Img,bottle1; 

function preload() {
  surferImg = loadImage("girlAngleOnly.png");
  waterImg = loadAnimation("gifWater-0.png","gifWater-1.png","gifWater-2.png","gifWater-3.png","gifWater-4.png","gifWater-5.png","gifWater-6.png","gifWater-7.png","gifWater-8.png");
  octopusImg = loadAnimation("octopusRed1.png","octopusRed2.png","octopusRed3.png","octopusRed4.png");
  castleImg = loadAnimation("castle1.png","castle2.png","castle3.png","castle4.png","castle5.png")
  islandImg = loadImage("island.png")
  rockImg = loadImage("rock.png");
  coinImg = loadImage("coin.png");
 soundJump = loadSound("jumpInTheWater.wav")
 fishImg = loadAnimation("animatedFish1.png","animatedFish2.png","animatedFish3.png","animatedFish4.png","animatedFish5.png","animatedFish6.png","animatedFish7.png","animatedFish8.png","animatedFish9.png","animatedFish10.png","animatedFish11.png","animatedFish12.png","animatedFish13.png",)
 oysterImg = loadAnimation("animatedOyster1.png","animatedOyster2.png","animatedOyster3.png")
 rock1Img = loadImage("rock1.png");
 rock2Img = loadImage("rock2.png");
 island1Img = loadImage("nightLand1.png");
 island2Img = loadAnimation("island1.png","island2.png","island3.png","island4.png","island5.png","island6.png","island7.png")
 island3Img = loadAnimation("land.png","land1.png","land2.png","land3.png","land4.png","land5.png","land6.png","land7.png") 
lighthouseImg = loadAnimation("lightHouse1.png","lightHouse2.png")
 castleDoorImg = loadAnimation("castleDoor1.png","castleDoor2.png","castleDoor3.png","castleDoor4.png","castleDoor5.png")
 rockGroup = new Group();
  islandGroup = new Group();
  coinGroup = new Group();
  octopusGroup = new Group();
  fortGroup = new Group();
  //bottle1Img= loadAnimation("bottle11.png","bottle12.png","bottle13.png");
}

function setup() {
  createCanvas(1600, 800);
  b1 = createSprite(300,350);
  b1.addAnimation("waterWater",waterImg);
  b1.velocityY = -(1* b1.y/100)
  b1.scale = 5;
  surfer1 = createSprite(150, 60, 200, 200);
  surfer1.addImage(surferImg);
  surfer1.scale = 0.05;
  surfer1.velocityY = 1;
 surfer1.debug = true;
 surfer1.setCollider("rectangle",100,100,200,200)

}

function draw() {  
  //strokeWeight(2)
  //stroke("black")
//text("Score:"+score,40,750);
  background(255);
  if (b1.y <80 ){
    b1.y = height/2;
  }
  
if(gameState === PLAY){
    if(keyDown(UP_ARROW)){
      surfer1.y += -3
    }
    if(keyDown(DOWN_ARROW)){
      surfer1.y += 3
    }
    if(keyDown(RIGHT_ARROW)){
      surfer1.x += 3
    }
    if(keyDown(LEFT_ARROW)){
      surfer1.x += -3
    }
  
  if(islandGroup.isTouching(surfer1)){
    surfer1.velocityY = 0
    soundJump.play();
    gameState = END
  }
  if(octopusGroup.isTouching(surfer1)){
    surfer1.velocityY = 0
    soundJump.play();
    gameState = END
  }
  if(fortGroup.isTouching(surfer1)){
    surfer1.velocityY = 0
    soundJump.play();
    gameState = END
  }
  if(rockGroup.isTouching(surfer1)){
    surfer1.velocityY = 0
    soundJump.play();
    gameState = END
  }
  if(coinGroup.isTouching(surfer1)){
    surfer1.velocityY += 0.5
    score++
    coinGroup [0].destroy();
  };
 

  }
  else if (gameState === END){
  b1.velocityY = 0
  surfer1.velocityY = 0
  surfer1.velocityX = 0;
  rockGroup.setLifetimeEach(-1);
  islandGroup.setLifetimeEach(-1);
  coinGroup.setLifetimeEach(-1);
  octopusGroup.setLifetimeEach(-1);
  fortGroup.setLifetimeEach(-1);
  rockGroup.setVelocityY(-1);
  islandGroup.setVelocityY(-1);
  coinGroup.setVelocityY(-1);
  octopusGroup.setVelocityY(-1);
  fortGroup.setVelocityY(-1);

  }
 
  spawnrock();
  spawnfort();
  spawncoin();
  spawnoctopus();
  spawnisland();
  //spawnbottle();

  drawSprites();
}
function spawnrock(){
  if(frameCount % -(Math.round(random(70,100))) === 0){
   rock = createSprite(90, 780, 20, 20);
  rock.x = Math.round(random(1,1400))
  rock.scale = 0.2;
    rock.velocityY = -5
    rock.lifetime = 300
 rock.depth = surfer1.depth;
    surfer1.depth +=1   
    lol = Math.round(random(1,3));
    switch(lol) {
      case 1:rock.addImage(rockImg);
              break;
     case 2: rock.addImage(rock2Img);
             break;
     case 3: rock.addImage(rock1Img);
             break;
      default: break;
  }
}
}
function spawnfort(){
  if(frameCount % -300 === 0 ){
    fort = createSprite(300, 780, 20, 20);
    fort.scale = 1.3;
    fort.depth = surfer1.depth;
    surfer1.depth +=1
    fort.x = Math.round(random(1,1400))
    fort.velocityY = -5
     rand = Math.round(random(1,2));
    switch(rand) {
      case 2:fort.addAnimation("fortBig",castleImg);
              break;
     case 1: fort.addAnimation("fortSmall",castleDoorImg);
             break;
      default: break;
  }
}
}
function spawncoin(){
  if(frameCount % -(Math.round(random(10,40))) === 0){
  coin = createSprite(Math.round(random(400,1000)),750 , 20, 20);
    coin.addImage(coinImg);
    coin.depth = surfer1.depth;
    surfer1.depth +=1
    coin.scale = 0.1;
    coin.velocityY = -5
    coin.x = Math.round(random(300,1200))
  }
}
function spawnoctopus(){
  if(frameCount % -100 === 0){
    octopus = createSprite(500, 780, 20, 20);
    octopus.depth = surfer1.depth;
    surfer1.depth +=1
    octopus.scale = 0.9;
     octopus.velocityY = -5;
      octopus.x = Math.round(random(1,1400));
      pearl = Math.round(random(1,3));
      switch(pearl) {
        case 3:octopus.addAnimation("fish",fishImg);
                break;
       case 2: octopus.addAnimation("octopus1",octopusImg);
               break;
       case 1: octopus.addAnimation("oyster",oysterImg);
               break;
        default: break;
}
}
}
function spawnisland(){
  if(frameCount % -(Math.round(random(350,400))) === 0){
    island = createSprite(350, 780, 20, 20);
    island.depth = surfer1.depth;
    surfer1.depth +=1
     island.velocityY = -5;
      island.x = Math.round(random(1,1400));
      islandRand = Math.round(random(1,4));
      switch(islandRand) {
       case 1:island.addAnimation("moving land",island2Img);
               break;
       case 3: island.addImage("normal",islandImg);
               break;
     //  case 2:island.addImage("night land",island1Img);
       //        break;
        case 2:island.addAnimation("land",island3Img);
               break;
        case 4:island.addAnimation("light",lighthouseImg );
         break;     
        default: break;
}
}}
/*function spawnbottle(){
  if(frameCount % -(Math.round(random(40,60))) === 0){
  bottle1 = createSprite(Math.round(random(400,1000)),750 , 20, 20);
    bottle1.addAnimation("bottle",bottle1Img);
    bottle1.depth = surfer1.depth;
    surfer1.depth +=1
    bottle1.scale = 0.05;
    bottle1.velocityY = -5
    bottle1.x = Math.round(random(300,1200))
  }
}*/
