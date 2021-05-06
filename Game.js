class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state)
  {
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      }

      car1 = createSprite(100, 600);
      car1.scale = 0.1;
      car1.addImage(cr1Img);

      car2 = createSprite(300, 600);
      car2.scale = 0.1;
      car2.addImage(cr2Img);

      car3 = createSprite(500, 600);
      car3.scale = 0.1;
      car3.addImage(cr3Img);

      car4 = createSprite(700, 600);
      car4.scale = 0.1;
      car4.addImage(cr4Img);


      cars = [car1, car2, car3, car4];
  }

  play()
  {
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined)
    {
      background("white");
      image(tr1image, displayWidth/400, displayHeight/100-2900, displayWidth/2, displayHeight*5);

      var index = 0;

      //the starting point if the series of the cars......from the line of line of player cars.its the starting point of the series of player cars
      var x = -80;
      var y = 200;
      
      for(var plr in allPlayers)
      {
        index += 1;

        //space between cars.
        x += 160;
        
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if(index === player.index)
        {
          //cars[index-1].shapeColor = "red";
          //camera.position.x = cars[index-1].x;
          camera.position.y = cars[index-1].y;
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.distance -=50
        player.update(); 

        if(player.distance > 3860){
          gameState = 2;
        }        
    }
      
    drawSprites();
  }
}

end()
{
  console.log("game over");
}