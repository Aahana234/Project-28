
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5;
var stoneObj;
var rope;
function preload()
{
	
	boyImage = loadImage("Sprites/boy.png");
	treeImage = loadImage("Sprites/tree.png");
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(900,300,40,200);
	mango2 = new Mango(700,300,30,400);
	mango3 = new Mango(900,300,40,500);
	mango4 = new Mango(1000,360,30,90);
	mango5 = new Mango(800,300,50,100);

	stoneObj = new Stone(100,500,70);
	rope = new Rope(stoneObj.body,{x:100,y:500});
	//tree = (100,400,40,60);
	//tree.addImage(treeImage);
	
	//boy = (300,200,50,80);
	//boy.addImage(boyImage);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  image(treeImage,600,400,600,500);
  image(boyImage,100,500,300,200);
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
 	rope.display();
	stoneObj.display();


detectollison(stoneObj,mango1);
detectollison(stoneObj,mango2);
detectollison(stoneObj,mango3);
detectollison(stoneObj,mango4);
detectollison(stoneObj,mango5);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		rope.attach =  this.stoneObj
		Matter.Body.setPosition(stoneObj.body, {x:235, y420})
		//launcherObject.attach(stoneObj.body);
	}
}

function detectollison(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStaticS(lmango.body,false);
}
}
function mouseDragged(){

    Matter.Body.setPosition(stoneObj.body,{x:mouseX , y:mouseY});

}

function mouseReleased(){

    rope.fly();


}


