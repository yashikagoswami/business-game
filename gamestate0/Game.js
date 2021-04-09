class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
  async  start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef= await database.ref('playerCount').once("value")
        if(playerCountRef.exists()) {
          playerCountRef=playerCountRef.val()
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
    play() {
      form.hide();
      //textSize(50);
      //text("game start",displayWidth/2-60,displayHeight/2-80);
      Player.getPlayerInfo();
      
}
}