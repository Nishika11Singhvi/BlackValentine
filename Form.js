class form
{
    constructor()
    {
        this.input = createInput('Enter Name');
        this.button = createButton('START');
        this.reset = createButton('Play Again'); 
    }

    display()
    {
        this.input.position(580,450);
        this.input.style('background', 'white');
        
        this.button.position(635,480);
        this.button.style('background', 'white');

        this.reset.position(20,20);

        this.button.mousePressed(()=>
        {
            this.input.hide();
            girlname=this.input.value();
            this.button.hide();
            this.reset.hide();
            writeData(1);
        })

        this.reset.mousePressed(()=>
        {
             writeData(0);
        })
    }

    hide()
    {
        this.button.hide();
        this.input.hide(); 
        this.reset.hide();
    }
}