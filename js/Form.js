class Form{
    constructor(){
        this.input=createInput("NAME")
        this.button=createButton("GO");
        this.greeting=createElement('h3');
        this.title=createElement('h1');
        this.reset=createButton('RESET')
    }

    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.title.hide()
    }
    display(){
        
        this.title.html("WELCOME TO OUR CAR RACING GAME");
        this.title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight);

        this.reset.position(displayWidth-100,20)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value()
            playerCount+=1;
            player.index=playerCount;
            player.update(player.name);
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
            Player.updateCarsAtEnd(0)

        })
       

    }
    
}