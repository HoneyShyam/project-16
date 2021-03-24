var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  //creating monkey
  monkey=createSprite=(80,315,20,20);
  monkey.addAnimation=("moving", monkey_running);
  monkey.scale=0.1

  //creating ground
  ground=createSprite=(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
}

function draw() {
 background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space") ){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if (frameCount % 300 === 0) {
    var stone = createSprite(500, 280, 20, 20);
    stone.addImage(obstaclesImg);
    stone.scale = 0.2;
    stone.velocityX = -8;
    stone.lifetime = 64;
    obstaclesGroup.add(stone);
  }

  if (world.frameCount % 80 === 0) {
    banana = createSprite( 600,250,40,10); 
    banana.y = random(120,200); 
    banana.velocityX = -5; 4
    banana.lifetime = 65;
    bananaGroup.add(banana);
  }

 drawSprites();
  stroke("white");
  textSize(22);
  fill("white");
  text("Score : " + score, 300, 80)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
}
