var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImg
var obstacle1img, obstacle2img, obstacle3img, obstacle4img, obstacle5img, obstacle6img

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
  cloudImg = loadImage("cloud.png")
  obstacle1img = loadImage("obstacle1.png")
  obstacle2img = loadImage("obstacle2.png")
  obstacle3img = loadImage("obstacle3.png")
  obstacle4img = loadImage("obstacle4.png")
  obstacle5img = loadImage("obstacle5.png")
  obstacle6img = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50, 180, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -2;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;
}

function draw() {
  background(255);

  if (keyDown("space")) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  trex.collide(invisibleGround);

  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600, 120, 40, 10);
    cloud.y = Math.round(random(80, 120));
    cloud.addImage(cloudImg)
    cloud.scale = 0.5;
    cloud.velocityX = -3;

    //assign lifetime to the variable
    cloud.lifetime = 200;

    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }

}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -6;

    //generate random obstacles
    var rand = Math.round(random(1, 6))
    //obstacle.addImage("obstacle" + rand);     
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1img)
        break;
      case 2:
        obstacle.addImage(obstacle2img)
        break;
      case 3:
        obstacle.addImage(obstacle3img)
        break;
      case 4:
        obstacle.addImage(obstacle4img)
        break;
      case 5:
        obstacle.addImage(obstacle5img)
        break;
      case 6:
        obstacle.addImage(obstacle6img)
        break;
      default:
        break;
    }

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
  }
}