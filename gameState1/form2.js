class Form2 {
    constructor() {
        this.plr1 = createElement('h2');
        this.plr2 = createElement('h2');
        this.reset = createButton('Reset');
    } 

    display(){
        //console.log(allPlayers)
        this.plr1.html("player1 : " + player.name)
        this.plr1.position(displayWidth/2+420,displayHeight/2-200,30,30);
        this.plr2.html("player2 : " + player.name)
        this.plr2.position(displayWidth/2-500,displayHeight/2-200,30,30);

        this.reset.position(displayWidth-100,20);

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          });
    }
}