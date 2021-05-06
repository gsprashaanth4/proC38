class Form 
{
  constructor() 
  {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h3');
  }

  hide()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display()
  {
    //this.title = createElement('h2');
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2.3, (displayHeight/2.5)-50);

    this.input.position((displayWidth/2)-99.5, (displayHeight/2)-80);
    this.button.position((displayWidth/2)-30, (displayHeight/2)-10);

    this.button.mousePressed(()=>
    {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name + ", please wait until other players join the game")
      this.greeting.position((displayWidth/2)-290, (displayHeight/2)-70);
    });

  }
}