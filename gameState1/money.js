class Money {
    constructor() {
        this.P1button1 = createButton('Rs.100');
        this.P1button2 = createButton('Rs.500');
        this.P1button3 = createButton('Rs.1000');
        this.P1button4 = createButton('Rs.5000');
        this.P1button5 = createButton('Rs.10000');
        
        this.P2button1 = createButton('Rs.100');
        this.P2button2 = createButton('Rs.500');
        this.P2button3 = createButton('Rs.1000');
        this.P2button4 = createButton('Rs.5000');
        this.P2button5 = createButton('Rs.10000');
    }

    hide(){
      this.P1button1.hide();  
    }

    display(){
        this.P1button1.position(displayWidth/2+490,displayHeight/2-100);
        this.P1button2.position(displayWidth/2+560,displayHeight/2-100);
        this.P1button3.position(displayWidth/2+480,displayHeight/2-50);
        this.P1button4.position(displayWidth/2+560,displayHeight/2-50);
        this.P1button5.position(displayWidth/2+520,displayHeight/2);

        this.P2button1.position(displayWidth/2-570,displayHeight/2-100);
        this.P2button2.position(displayWidth/2-640,displayHeight/2-100);
        this.P2button3.position(displayWidth/2-570,displayHeight/2-50);
        this.P2button4.position(displayWidth/2-650,displayHeight/2-50);
        this.P2button5.position(displayWidth/2-620,displayHeight/2);

        this.P1button1.mousePressed(()=>{
            this.P1button1.hide();
        });
    }
}