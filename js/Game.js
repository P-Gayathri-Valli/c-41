class Game{
   
    constructor(){}
    getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function(data){
        gameState=data.val()
    })

    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
    

        if(gameState===0){
            player =new Player()
            var playerCountref=await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount();
            }
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200)
        car1.addImage(car1_img)
        car2=createSprite(300,200)
        car2.addImage(car2_img)
        car3=createSprite(500,200)
        car3.addImage(car3_img)
        car4=createSprite(700,200)
        car4.addImage(car4_img)

        cars=[car1,car2,car3,car4]
        passedFinish=false
        
    }

    play(){
        form.hide();
        /*textSize(20);
        text("GAME STARTS",120,100)*/
        Player.getPlayerInfo()
        player.getCarsAtEnd()
        

        if(allPlayers!==undefined){
            //var displayPosition=130;
            background("#c68767")
            image(track_img,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0;
            var x=175
            var y
            for(var plr in allPlayers){
                index=index+1
                x=x+200
                y=displayHeight-allPlayers[plr].distance+30
                cars[index-1].x=x
                cars[index-1].y=y

                if(index===player.index){
                    stroke("white")
                    fill("white")
                    rect(x-38,y-50,80,120)
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
            
           // displayPosition+=20
           // textSize(15)
           // text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
        }
        }

        if(keyIsDown(UP_ARROW)&&player.index!==null){

            player.distance+=20
            player.update();

        }
        if(player.distance>3860){
            gameState=2
            gameState=2

            player.rank+=1
            Player.updateCarsAtEnd(player.rank)
        }
        

        player1=database.ref("player1")
        player2=database.ref("player2")
        player3=database.ref("player3")
        player4=database.ref("player4")

        /*if(player1.distance>3860){
            gameState=2

            player.rank+=1
            Player.updateCarsAtEnd(player.rank)
        }
        if(player2.distance>3860){
            gameState=2

            player.rank+=1
            Player.updateCarsAtEnd(player.rank)
        }if(player3.distance>3860){
            gameState=2

            player.rank+=1
            Player.updateCarsAtEnd(player.rank)
        }if(player4.distance>3860){
            gameState=2

            player.rank+=1
            Player.updateCarsAtEnd(player.rank)
        }*/
        drawSprites()

        
    }
    end(){
        console.log("GAME HAS ENDED")
        console.log(player.rank)
        //textSize(70)
        //text(allPlayers[plr].name+player.rank,600,500)
    }
        
   


}