function preload()
{

}

 function setup()
 {
   createCanvas(600,600)
   edges=createEdgeSprite()
   player=createSprite(50,550,40,40)
   target=createSprite(550,50,40,40)
   huddle1=createSprite(200,250,200,20)
   huddle2=createSprite(400,400,200,20)
   huddle1.velocityX=5
   huddle2.velocityX=-5

  player.shapeColor="black"
  target.shapeColor="yellow"


 }

 function draw()
 {
   background("blue")
 
   player.bounceOff(edges[0])
   player.bounceOff(edges[1])
   player.bounceOff(edges[2])
   player.bounceOff(edges[3])
  
   huddle1.bounceOff(edges[0])
   huddle2.bounceOff(edges[0])
   huddle1.bounceOff(edges[1])
   huddle2.bounceOff(edges[1])
    
   if (keyDown("right"))
   {
     player.x=player.x+10
   }

if (keyDown("left"))
   {
     player.x=player.x-10
   }
   if (keyDown("up"))
   {
     player.y=player.y-10
   }
   if (keyDown("Down"))
   {
     player.y=player.y+10
   }

   if(player.isTouching(huddle1))
   {
    
    huddle1.velocityX=0
    huddle2.velocityX=0
    text("YOU LOOSE",300,300)


   }
   if(player.isTouching(huddle2))
   {
    
    huddle1.velocityX=0
    huddle2.velocityX=0
    text("YOU LOOSE",300,300)


   }
   if(player.isTouching(target))
   {
     text("YOU WIN",300,300)
   }

     drawSprites()
 }
 